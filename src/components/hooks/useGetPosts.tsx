import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, limit, orderBy, query, startAfter } from 'firebase/firestore';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { db, firebaseapp } from '../../../pages/_app';

export const useGetPosts = (menu: string) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const [hasMore, setHasMore] = useState(true);

  const getNextPosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      let q;

      if (!lastVisible) {
        q = query(collection(db, menu), orderBy('timestamp', 'desc'), limit(4));
      } else {
        q = query(collection(db, menu), orderBy('timestamp', 'desc'), limit(4), startAfter(lastVisible));
      }

      const snapshot = await getDocs(q);
      // const postArr = snapshot.docs.map((doc) => doc.data());
      const postArr = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      if (postArr.length > 0) {
        setPosts((prevPosts): any => [...prevPosts, ...postArr]);
        setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      } else {
        // 모든 게시물을 불러왔을 때 마지막 페이지를 표시하거나 스크롤 이벤트를 무시할 수 있습니다.
        setLastVisible(null);
        setHasMore(false); // 추가: 더 이상 게시물이 없음을 표시
      }
    } catch (error) {
      console.error('게시물을 불러오는 중 오류 발생: ', error);
    } finally {
      setLoading(false);
    }
  };

  // 스크롤 이벤트 핸들러를 등록
  useBottomScrollListener(getNextPosts, { triggerOnNoScroll: false }); // 추가

  useEffect(() => {
    getNextPosts(); // 초기 데이터 로딩
    console.log('새로고침');
    console.log(posts);
  }, []);

  return { posts, getNextPosts, hasMore, loading };
};

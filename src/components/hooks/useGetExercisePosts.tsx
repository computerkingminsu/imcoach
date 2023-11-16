import { collection, getDocs, query } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../../pages/_app';

export const useGetExercisePosts = (menu: string) => {
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boadid;
  const [posts, setPosts]: any = useState([]);

  const getPosts = async () => {
    let q;
    q = query(collection(db, menu));
    const snapshot: any = await getDocs(q);
    const postsArr: any = snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }));
    setPosts(postsArr);
  };

  useEffect(() => {
    getPosts();
    console.log(posts);
  }, []);

  return {
    posts,
  };
};

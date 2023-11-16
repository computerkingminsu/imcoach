import { Firestore, addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { authInstance, db } from '../../../pages/_app';
import { useRecoilState } from 'recoil';
import { isLoggedIn } from '../../commons/globalstate/globalstate';
import { Modal } from 'antd';

export const useComments = (menu: string) => {
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boadid;
  const [comments, setComments]: any = useState([]);
  const [login] = useRecoilState(isLoggedIn);
  const [newComment, setNewComment] = useState('');
  const { confirm } = Modal;
  const user = authInstance.currentUser;
  const email: any = user?.email;
  const getComments = async () => {
    let q;
    q = query(collection(db, menu), orderBy('timestamp', 'desc'), where('postId', '==', postId));
    const snapshot: any = await getDocs(q);
    const commentsArr: any = snapshot.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }));
    setComments(commentsArr);
  };

  const success = () => {
    Modal.success({
      content: '댓글 등록에 성공하였습니다!',
    });
  };

  const deletemodal = () => {
    Modal.success({
      content: '댓글 삭제에 성공하였습니다!',
    });
  };

  const addDocError = () => {
    Modal.error({
      title: '로그인이 필요합니다!',
    });
  };
  useEffect(() => {
    console.log(postId);
    if (postId) {
      getComments();
    }
  }, [postId]);

  const addComment = async () => {
    if (login) {
      const comments = collection(db, 'comment');
      await addDoc(comments, {
        postId,
        text: newComment,
        timestamp: new Date(),
        email,
      });
      success();
      window.location.reload();
    } else {
      addDocError();
    }
  };

  const deleteComment = async (commentId: any) => {
    const comments: any = doc(db, 'comment', commentId);
    await deleteDoc(comments);
    window.location.reload();
  };

  return {
    comments,
    newComment,
    setNewComment,
    addComment,
    deleteComment,
    deletemodal,
  };
};

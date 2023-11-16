import { useRouter } from 'next/router';
import { useGetDetailPost } from '../../../hooks/useGetDetailPost';
import * as S from './BoardDetail.style';
import React, { useState } from 'react';
import { useMoveToPage } from '../../../hooks/useMoveToPage';
import { useDeletePost } from '../../../hooks/useDeletePost';
import { Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useComments } from '../../../hooks/useComments';
// import { useAuth } from '../../../hooks/coustoms/useAuth';
import { useLogin } from '../../../hooks/useLogin';

export default function BoardDetail(): JSX.Element {
  const router = useRouter();
  const data = JSON.stringify(router.query); // boardId를 추출
  const jsonObject = JSON.parse(data);
  const postId = jsonObject.boadid;
  const { post, usermatch }: any = useGetDetailPost('board');
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickDeletePost } = useDeletePost();
  const { comments, newComment, setNewComment, addComment, deleteComment }: any = useComments('comment');
  const { confirm } = Modal;
  const [commentsUsermatch, setCommentsUserMatch] = useState(false);
  const { userEmail } = useLogin();

  const showDeleteConfirm = () => {
    confirm({
      title: '정말로 게시물을 삭제하시겠습니까?',
      icon: <ExclamationCircleFilled rev={undefined} />,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onClickDeletePost();
      },
      onCancel() {},
    });
  };

  const timestamp = post?.timestamp;

  const formattedTimestamp = timestamp ? new Date(timestamp.toMillis()).toLocaleString() : null;
  console.log(commentsUsermatch);

  return (
    <S.Wrapper>
      <S.PostWrapper>
        <S.Header>
          <S.Title>{post?.title}</S.Title>
          <S.WriterWrapper>
            <S.Writer>{formattedTimestamp}</S.Writer>
            <S.Writer>작성자: {post?.email}</S.Writer>
            {usermatch ? (
              <S.EditWrapper>
                <S.EditIcon onClick={onClickMoveToPage(`${postId}/edit`)} rev={undefined} />
                <S.DeleteIcon onClick={showDeleteConfirm} rev={undefined} />
              </S.EditWrapper>
            ) : null}
          </S.WriterWrapper>
        </S.Header>
        <S.Body>
          <S.Contents dangerouslySetInnerHTML={{ __html: post?.contents }} />
        </S.Body>
      </S.PostWrapper>
      <S.CommentsWrapper>
        <S.CommentsHeader>답변</S.CommentsHeader>
        <>
          <S.CommentsInput
            type="text"
            placeholder="소중한 답변을 작성해주세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <S.ButtonWrapper>
            <S.SubmitButton onClick={addComment}>등록</S.SubmitButton>
          </S.ButtonWrapper>
        </>

        <>
          {comments.map((comment: any) => (
            <S.Row key={comment.id}>
              <S.CommentsButton>
                <S.Comments key={comment.id}>{comment.text}</S.Comments>
                {comment.email === userEmail ? (
                  <S.CommentsEditWrapper>
                    <S.CommentsDeleteIcon rev={undefined} onClick={() => deleteComment(comment.id)} />
                  </S.CommentsEditWrapper>
                ) : null}
              </S.CommentsButton>
              <S.CommentsWriter>{comment.email}</S.CommentsWriter>
            </S.Row>
          ))}
        </>
      </S.CommentsWrapper>
    </S.Wrapper>
  );
}

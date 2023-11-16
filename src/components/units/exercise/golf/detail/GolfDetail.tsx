import { authInstance, db } from '../../../../../../pages/_app';
import { useGetExerciseDetailPost } from '../../../../hooks/useGetExerciseDetailPost';
import { Button, DetailImage, Infor, Price, Title, Wrapper, Writer } from './GolfDetail.style';
import Head from 'next/head';
import { useEffect } from 'react';
import { Modal } from 'antd';
import { addDoc, collection } from 'firebase/firestore';
import { useRecoilState } from 'recoil';
import { isLoggedIn } from '../../../../../commons/globalstate/globalstate';
declare const window: typeof globalThis & {
  IMP: any;
};

export default function GolfDetail(): JSX.Element {
  const { post }: any = useGetExerciseDetailPost('golf');
  const [login] = useRecoilState(isLoggedIn);
  const user = authInstance.currentUser;
  const buyer_email = user?.email;
  const name = post?.title;
  const amount = post?.amount;

  const success = () => {
    Modal.success({
      content: '결제에 성공하였습니다!',
    });
  };

  const Error = () => {
    Modal.error({
      title: '결제에 실패했습니다.',
    });
  };

  const loginError = () => {
    Modal.error({
      title: '로그인이 필요합니다.',
    });
  };

  const onClickPayment = () => {
    if (!login) {
      loginError();
      return;
    }

    const IMP = window.IMP;
    IMP.init('imp87342824');
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        //merchant_uid: "결제 번호",
        name,
        amount: 100,
        buyer_email,
        buyer_name: buyer_email,
        m_redirect_url: '/',
      },
      function (rsp: { success: any }) {
        // callback
        if (rsp.success) {
          const postPayment = async (): Promise<void> => {
            console.log('작동');
            //@ts-ignore
            const buyer_email = rsp.buyer_email;
            //@ts-ignore
            const merchant_uid = rsp.merchant_uid;
            //@ts-ignore
            const name = rsp.name;
            //@ts-ignore
            const paid_amount = rsp.paid_amount;
            const payment = collection(db, 'payment');
            await addDoc(payment, {
              buyer_email,
              merchant_uid,
              timestamp: new Date(),
              name,
              paid_amount,
            });
          };
          postPayment();
          location.href = '/';
          success();
        } else {
          Error(); // 결제 실패 로직
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
      </Head>
      <Wrapper>
        <DetailImage src={post?.detailUrl} />
        <Infor>
          <Title>{post?.title}</Title>
          <Price>{post?.price}</Price>
          <Writer>강사 : {post?.writer}</Writer>
          <Button onClick={onClickPayment}>코칭 신청하기!</Button>
        </Infor>
      </Wrapper>
    </>
  );
}

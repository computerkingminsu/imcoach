import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { Pay, PayList, SubTitle, Title, Wrapper } from './MyPage.styles';
import { authInstance, db } from '../../../../pages/_app';
import { useEffect, useState } from 'react';

export default function MyPage() {
  const [payments, setPayments]: any = useState([]);
  const user = authInstance.currentUser;
  const email: any = user?.email;
  useEffect(() => {
    const getPayments = async () => {
      if (email) {
        const q = query(collection(db, 'payment'), orderBy('timestamp', 'desc'), where('buyer_email', '==', email));
        const snapshot: any = await getDocs(q);
        const payArr: any = snapshot.docs.map((doc: any) => {
          const data = doc.data();
          return {
            ...data,
            id: doc.id,
            timestamp: data.timestamp.toDate(), // Firestore 타임스탬프를 JavaScript Date 객체로 변환
          };
        });
        setPayments(payArr);
      }
    };
    getPayments();
  }, [email]);

  return (
    <Wrapper>
      <Title>마이페이지</Title>
      <SubTitle>결제내역</SubTitle>
      <PayList>
        <Pay>결제번호</Pay>
        <Pay>결제내용</Pay>
        <Pay>결제금액</Pay>
        <Pay>결제일시</Pay>
      </PayList>
      {payments.map((payment: any) => (
        <PayList key={payment.id}>
          <Pay>{payment.merchant_uid}</Pay>
          <Pay>{payment.name}</Pay>
          <Pay>{payment.paid_amount}</Pay>
          <Pay>
            {payment.timestamp.toString()} {/* JavaScript Date 객체로 변환된 날짜를 사용 */}
          </Pay>
        </PayList>
      ))}
    </Wrapper>
  );
}

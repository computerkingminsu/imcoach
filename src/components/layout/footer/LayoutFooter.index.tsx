import { Left, Right, Text, Wrapper } from './LayoutFooter.styles';

export default function LayoutFooter(): JSX.Element {
  return (
    <Wrapper>
      <Text>
        <Left>
          I'm coach | 개인정보처리방침 | 이용약관 <br /> <br /> 대표자: 김민수 | 사업자번호: 1111-11-11111 사업자 정보
          확인 <br /> 통신판매업: 4444-서울서울-4444 | 개인정보보호책임자: 김민수 | 이메일: ex@ex.com <br /> 전화번호:
          070-4444-4444 | 주소 : 서울시 강남구 강남구 강남로 444 a동 4040호 <br />
          <br /> @IMCOACH.ALL RIGHTS RESERVED
        </Left>
        <Right>
          고객 센터 회사소개 인재채용 제휴제안 이용약관 <br />
          개인정보처리방침 ⓒ IMCOACH Corp.
        </Right>
      </Text>
    </Wrapper>
  );
}

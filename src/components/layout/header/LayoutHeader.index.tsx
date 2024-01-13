import Link from 'next/link';
import {
  InnerButton,
  InnerLogo,
  InnerWrapper,
  MypageLogout,
  SignUpButton,
  UserEmail,
  UserWrapper,
  Wrapper,
  MenuItem,
  Space,
  NavWrapper,
  NavDiv,
  ButtonWrapper,
  LogoImg,
  LogoDiv,
  Navbar,
  NavbarDiv,
  LodingDiv,
  Loding,
  DropdownContainer,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownContent2,
} from './LayoutHeader.styles';
import 'firebase/auth';
import { isLoggedIn, layoutEmail, useSsrComplectedState, userEmail } from '../../../commons/globalstate/globalstate';
import { authInstance } from '../../../../pages/_app';
import { useMoveToPage } from '../../hooks/useMoveToPage';
import { useRecoilState, useRecoilValue } from 'recoil';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { Spin } from 'antd';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function LayoutHeader(): JSX.Element {
  const login = useRecoilValue(isLoggedIn);
  const emailPrefix = useRecoilValue(layoutEmail);
  const setSsrCompleted = useSsrComplectedState();
  useEffect(setSsrCompleted, [setSsrCompleted]);
  const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();
  const [, setLogin] = useRecoilState<boolean | null>(isLoggedIn);
  const [, setLayoutEmail] = useRecoilState<string | null | undefined>(layoutEmail);
  const [, setUserEmail] = useRecoilState<string | null | undefined>(userEmail);

  const exerciseitems: MenuProps['items'] = [
    {
      key: '1',
      label: <div onClick={onClickMoveToPage('/exercise/workout')}>헬스</div>,
    },
    {
      key: '2',
      label: <div onClick={onClickMoveToPage('/exercise/golf')}>골프</div>,
    },
    {
      key: '3',
      label: <div onClick={onClickMoveToPage('/exercise/tennis')}>테니스</div>,
    },
  ];

  const regionitems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a href="/region/seoul" onClick={onClickMoveToPage('/region/seoul')}>
          서울
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a href="/region/gyeonggi" onClick={onClickMoveToPage('/region/gyeonggi')}>
          경기
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a href="/region/incheon" onClick={onClickMoveToPage('/region/incheon')}>
          인천
        </a>
      ),
    },
  ];
  const onClickLogout = () => {
    authInstance
      .signOut()
      .then(() => {
        setLogin(null); // Recoil 상태를 초기화
        setLayoutEmail(null);
        setUserEmail(null);

        localStorage.removeItem('recoil-persist'); // 로컬 스토리지에서 Recoil 상태 제거
        router.push('/').then(() => {
          window.location.reload(); // 페이지 새로 고침은 모든 상태 업데이트가 완료된 후 수행
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <Wrapper>
      <InnerWrapper>
        <NavWrapper>
          <Link href="/">
            <InnerLogo>I'm coach</InnerLogo>
          </Link>
          <Link href="/">
            <LogoDiv>
              <LogoImg src="/Logo.png" />
            </LogoDiv>
          </Link>

          <NavDiv>
            <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
              <DropdownButton>지역별</DropdownButton>
              <DropdownContent isOpen={isOpen} isOpen2={false}>
                <Link href="/region/seoul">
                  <DropdownItem>서울</DropdownItem>
                </Link>
                <Link href="/region/gyeonggi">
                  <DropdownItem>경기</DropdownItem>
                </Link>
                <Link href="/region/incheon">
                  <DropdownItem>인천</DropdownItem>
                </Link>
              </DropdownContent>
            </DropdownContainer>
          </NavDiv>
          <NavDiv>
            <DropdownContainer onMouseEnter={() => setIsOpen2(true)} onMouseLeave={() => setIsOpen2(false)}>
              <DropdownButton>운동별</DropdownButton>
              <DropdownContent2 isOpen={false} isOpen2={isOpen2}>
                <Link href="/exercise/workout">
                  <DropdownItem>헬스</DropdownItem>
                </Link>
                <Link href="/exercise/golf">
                  <DropdownItem>골프</DropdownItem>
                </Link>
                <Link href="/exercise/tennis">
                  <DropdownItem>테니스</DropdownItem>
                </Link>
              </DropdownContent2>
            </DropdownContainer>
          </NavDiv>
          <NavDiv>
            <Link href="/boards">
              <MenuItem>커뮤니티</MenuItem>
            </Link>
          </NavDiv>
        </NavWrapper>
        {/* {login === null ? (
          <LodingDiv>
            <Spin size="default" />
            <Loding>loading...</Loding>
          </LodingDiv>
        ) : (
          <ButtonWrapper>
            <Link href="/login">
              <InnerButton>로그인</InnerButton>
            </Link>
            <Link href="/signup">
              <SignUpButton>회원가입</SignUpButton>
            </Link>
          </ButtonWrapper>
          <> */}
        {login ? (
          <UserWrapper>
            <UserEmail>{emailPrefix}님</UserEmail>
            <MypageLogout onClick={onClickMoveToPage('/mypage')}>마이페이지</MypageLogout>
            <MypageLogout onClick={onClickLogout}>로그아웃</MypageLogout>
          </UserWrapper>
        ) : (
          <ButtonWrapper>
            <Link href="/login">
              <InnerButton>로그인</InnerButton>
            </Link>
            <Link href="/signup">
              <SignUpButton>회원가입</SignUpButton>
            </Link>
          </ButtonWrapper>
        )}
        {/* </>
        )} */}
      </InnerWrapper>
      <Navbar>
        <NavbarDiv>
          <DropdownContainer onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <DropdownButton>지역별</DropdownButton>
            <DropdownContent isOpen={isOpen} isOpen2={false}>
              <Link href="/region/seoul">
                <DropdownItem>서울</DropdownItem>
              </Link>
              <Link href="/region/gyeonggi">
                <DropdownItem>경기</DropdownItem>
              </Link>
              <Link href="/region/incheon">
                <DropdownItem>인천</DropdownItem>
              </Link>
            </DropdownContent>
          </DropdownContainer>
        </NavbarDiv>
        <NavbarDiv>
          <DropdownContainer onMouseEnter={() => setIsOpen2(true)} onMouseLeave={() => setIsOpen2(false)}>
            <DropdownButton>운동별</DropdownButton>
            <DropdownContent2 isOpen={false} isOpen2={isOpen2}>
              <Link href="/exercise/workout">
                <DropdownItem>헬스</DropdownItem>
              </Link>
              <Link href="/exercise/golf">
                <DropdownItem>골프</DropdownItem>
              </Link>
              <Link href="/exercise/tennis">
                <DropdownItem>테니스</DropdownItem>
              </Link>
            </DropdownContent2>
          </DropdownContainer>
        </NavbarDiv>
        <NavbarDiv>
          <Link href="/boards">
            <MenuItem onClick={onClickMoveToPage('/boards')}>커뮤니티</MenuItem>
          </Link>
        </NavbarDiv>
      </Navbar>
    </Wrapper>
  );
}

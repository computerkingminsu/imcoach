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
} from './LayoutHeader.styles';
import 'firebase/auth';
import { isLoggedIn, layoutEmail, useSsrComplectedState } from '../../../commons/globalstate/globalstate';
import { authInstance } from '../../../../pages/_app';
import { useMoveToPage } from '../../hooks/useMoveToPage';
import { useRecoilValue } from 'recoil';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { Spin } from 'antd';
import { useEffect } from 'react';

export default function LayoutHeader() {
  const login = useRecoilValue(isLoggedIn);
  const emailPrefix = useRecoilValue(layoutEmail);
  const setSsrCompleted = useSsrComplectedState();
  useEffect(setSsrCompleted, [setSsrCompleted]);

  const { onClickMoveToPage } = useMoveToPage();
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
    authInstance.signOut();
  };
  return (
    <Wrapper>
      <InnerWrapper>
        <NavWrapper>
          <InnerLogo href="/">I'm coach</InnerLogo>
          <LogoDiv href="/">
            <LogoImg src="/Logo.png" />
          </LogoDiv>
          <NavDiv>
            <Dropdown menu={{ items: regionitems }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>지역별</Space>
              </a>
            </Dropdown>
          </NavDiv>
          <NavDiv>
            <Dropdown menu={{ items: exerciseitems }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>운동별</Space>
              </a>
            </Dropdown>
          </NavDiv>
          <NavDiv>
            <MenuItem onClick={onClickMoveToPage('/boards')}>커뮤니티</MenuItem>
          </NavDiv>
        </NavWrapper>
        {login === null ? (
          <LodingDiv>
            <Spin size="default" />
            <Loding>loading...</Loding>
          </LodingDiv>
        ) : (
          <>
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
          </>
        )}
      </InnerWrapper>
      <Navbar>
        <NavbarDiv>
          <Dropdown menu={{ items: regionitems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>지역별</Space>
            </a>
          </Dropdown>
        </NavbarDiv>
        <NavbarDiv>
          <Dropdown menu={{ items: exerciseitems }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>운동별</Space>
            </a>
          </Dropdown>
        </NavbarDiv>
        <NavbarDiv>
          <MenuItem onClick={onClickMoveToPage('/boards')}>커뮤니티</MenuItem>
        </NavbarDiv>
      </Navbar>
    </Wrapper>
  );
}

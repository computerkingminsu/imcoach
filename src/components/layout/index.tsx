import styled from '@emotion/styled';
import LayoutHeader from './header/LayoutHeader.index';
import LayoutBanner from './banner/LayoutBanner.index';
import { useAuth } from '../hooks/useAuth';
import LayoutFooter from './footer/LayoutFooter.index';
import { useRecoilState } from 'recoil';
import { isLoggedIn } from '../../commons/globalstate/globalstate';

interface ILayoutProps {
  children: JSX.Element;
}

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Layout(props: ILayoutProps): JSX.Element {
  useAuth();
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </>
  );
}

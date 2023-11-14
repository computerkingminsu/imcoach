import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #6a75ca;
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: white;
  box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.3);
  @media only screen and (max-width: 480px) {
    width: 100vw;
    height: 90px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100vw;
    height: 90px;
  }
`;
export const Navbar = styled.div`
  display: none;
  @media only screen and (max-width: 480px) {
    width: 100vw;
    margin-top: 10px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100vw;
    margin-top: 10px;
    height: 30px;
    padding-left: 50px;
    padding-right: 50px;
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavbarDiv = styled.div`
  @media only screen and (max-width: 480px) {
  }
`;
export const InnerWrapper = styled.div`
  width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  @media only screen and (max-width: 480px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    align-items: center;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InnerLogo = styled.a`
  text-decoration: none;
  color: inherit; /* 링크 색상을 상속 */
  font-weight: normal; /* 글꼴 두껍게 효과 제거 */
  font-size: 25px;
  font-weight: 900;
  cursor: pointer;
  margin-right: 50px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
`;

export const LogoDiv = styled.a`
  text-decoration: none;
  color: inherit; /* 링크 색상을 상속 */
  font-weight: normal; /* 글꼴 두껍게 효과 제거 */
  display: flex;
  align-items: center;
  height: auto;
  margin-left: 5px;
`;
export const LogoImg = styled.img`
  width: 20px;
  height: 20px;
  display: none;
  background: none;
  border: none;
  @media only screen and (max-width: 480px) {
    display: inline-block;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    display: inline-block;
  }
`;
export const ButtonWrapper = styled.div`
  @media only screen and (max-width: 480px) {
  }
`;
export const InnerButton = styled.a`
  margin: 10px;
  cursor: pointer;
  font-size: 15px;
  :hover {
    color: #b0b7eb;
  }
  @media only screen and (max-width: 480px) {
  }
`;

export const SignUpButton = styled.button`
  border-radius: 15px;
  background-color: #6a75ca;
  border: #6a75ca;
  cursor: pointer;
  color: white;
  font-size: 14px;
  height: 35px;
  width: 80px;
  margin-left: 10px;
  :hover {
    background-color: #5e68b5;
  }
  @media only screen and (max-width: 480px) {
    font-size: 12px;
    width: 60px;
    height: 30px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 12px;
    width: 60px;
    height: 30px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 480px) {
    margin-right: 5px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 5px;
  }
`;
export const UserEmail = styled.div`
  font-size: 16px;
  font-weight: 800;
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const MypageLogout = styled.div`
  margin-left: 17px;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  :hover {
    color: #b0b7eb;
  }
  @media only screen and (max-width: 480px) {
    font-size: 13px;
  }
`;

export const MenuItem = styled.div`
  //margin: 0px 80px;
  cursor: pointer;
  :hover {
    color: #b0b7eb;
  }
`;

export const MenuItemRegion = styled.a`
  margin: 0px 80px;
  text-decoration: none;
  color: #6a75ca;
  cursor: pointer;
  :hover {
    color: #b0b7eb;
  }
`;

export const Space = styled.div`
  color: #6a75ca;
  cursor: pointer;
  :hover {
    color: #b0b7eb;
  }
`;

export const NavDiv = styled.div`
  margin-right: 50px;
  padding-top: 5px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
`;

export const LodingDiv = styled.div`
  display: flex;
`;

export const Loding = styled.div`
  margin-left: 5px;
`;

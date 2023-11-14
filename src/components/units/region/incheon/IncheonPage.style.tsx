import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 450px;
  width: 1100px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 300px;

  @media only screen and (max-width: 480px) {
    width: 100vw;
    padding-left: 9%;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100vw;
    padding-left: 9%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100vw;
    padding-left: 9%;
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  color: #6a75ca;
  font-size: 15px;
  @media only screen and (max-width: 480px) {
    display: none;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
`;

export const Sidebarlist = styled.a`
  text-decoration: none;
  color: inherit; /* 링크 색상을 상속 */
  font-weight: normal; /* 글꼴 두껍게 효과 제거 */
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  cursor: pointer;
`;

export const SidebarSelect = styled.div`
  background-color: #f5f7fc;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  border-radius: 7px;
  cursor: pointer;
`;

export const KakaoMap = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 20px;
  margin-top: 10px;
  @media only screen and (max-width: 480px) {
    width: 90%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 90%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 80%;
  }
`;

export const MapWrapper = styled.div`
  margin-left: 30px;
  height: 900px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    width: 100vw;
    margin-left: 0px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100vw;
    margin-left: 0px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100vw;
    margin-left: 0px;
  }
`;
export const MapTitle = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #5c6ab8;
  height: 30px;
  @media only screen and (max-width: 480px) {
    width: 90%;
    overflow: hidden;
  }
`;
export const MapSubTitle = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: #5c6ab8;
  height: 20px;
  margin-top: 7px;
`;

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 450px;
  width: 1100px;

  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media only screen and (max-width: 480px) {
    width: 95vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 95vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const KakaoMap = styled.div`
  width: 900px;
  height: 600px;
  border-radius: 20px;
  margin-top: 10px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100%;
  }
`;

export const MapWrapper = styled.div`
  margin-left: 30px;
  height: 500px;
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
    width: 100%;
    font-size: 18px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100%;
  }
`;

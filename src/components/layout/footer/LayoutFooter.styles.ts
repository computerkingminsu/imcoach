import styled from '@emotion/styled';

export const Wrapper = styled.footer`
  width: 100%;
  height: 300px;
  background-color: #303740;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  @media only screen and (max-width: 480px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 5%;
    padding-bottom: 20%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
    padding-bottom: 10%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
    padding-bottom: 10%;
  }
`;

export const Text = styled.div`
  width: 1100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #adadad;
  font-size: 13px;

  @media only screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 10px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 13px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 13px;
  }
`;

export const Left = styled.div`
  width: 700px;
`;

export const Right = styled.div`
  width: 300px;
`;

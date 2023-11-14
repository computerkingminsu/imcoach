import styled from '@emotion/styled';

export const QurationWrapper = styled.div`
  height: 140px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 480px) {
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
  }
`;

export const QurationContents = styled.button`
  width: 90px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  background-color: white;
  color: #6575ca;
  border-radius: 20px;
  border: 2px solid #6575ca;
  cursor: pointer;
  :hover {
    background-color: #eff2f8;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 2vw;
    margin-right: 2vw;
  }
`;

export const QurationImage = styled.img`
  margin-right: 6px;
  width: 25px;
  height: 25px;
`;

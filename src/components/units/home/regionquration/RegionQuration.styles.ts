import styled from '@emotion/styled';
export const AreaWrapper = styled.div`
  width: 1100px;
  height: 60px;
  margin-top: 8px;
  cursor: pointer;
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

export const AreaContents = styled.a`
  text-decoration: none;
  color: inherit; /* 링크 색상을 상속 */
  font-weight: normal; /* 글꼴 두껍게 효과 제거 */
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6575ca;
  font-weight: 500;
  :hover {
    color: #434f8c;
  }
  @media only screen and (max-width: 480px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;

export const AreaImage = styled.img`
  margin-bottom: 15px;
  width: 30px;
  height: 30px;
`;

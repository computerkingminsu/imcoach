import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  margin-top: 30px;
  margin-bottom: 150px;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 80vw;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80vw;
  }
  @media only screen and (min-width: 769px) and (max-width: 1280px) {
    width: 90vw;
    padding-left: 9%;
  }
`;
export const DetailImage = styled.div`
  border-radius: 20px;
  margin-bottom: auto;
  overflow: hidden;
`;

export const Infor = styled.div`
  width: 230px;
  height: 250px;
  margin-left: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  border: 2px solid #e1e9f7;
  padding-left: 10px;
  padding-top: 10px;
  /* position: fixed; */
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-top: 10px;
`;

export const Price = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-top: 30px;
`;

export const Writer = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-top: 30px;
`;

export const Button = styled.button`
  background-color: #6a75ca;
  border: #6a75ca;
  border-radius: 10px;
  margin-top: 30px;
  height: 50px;
  width: 200px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  :hover {
    background-color: #5e68b5;
  }
`;

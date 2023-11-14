import styled from '@emotion/styled';

export const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
  height: 700px;
  margin-bottom: 150px;
`;
export const Wrapper = styled.div`
  height: 500px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginHeadText = styled.div`
  height: 50px;
  width: 350px;
  padding: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: 900;
`;

export const LoginText = styled.div`
  height: 50px;
  width: 350px;
  padding: 20px;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
`;
export const LoginInput = styled.input`
  border-color: #f1f4f9;
  border-radius: 7px;
  height: 40px;
  width: 350px;
  color: #3e4042;
`;

export const LoginButton = styled.button`
  background-color: #6a75ca;
  border: #6a75ca;
  border-radius: 7px;
  height: 50px;
  width: 350px;
  margin-top: 30px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  :hover {
    background-color: #5e68b5;
  }
`;

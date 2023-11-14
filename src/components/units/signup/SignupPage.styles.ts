import styled from '@emotion/styled';

export const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
  color: #3e4042;
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

export const SignupHeadText = styled.div`
  height: 50px;
  width: 350px;
  padding: 20px;
  text-align: center;
  font-size: 25px;
  color: #000a12;

  font-weight: 900;
`;

export const SignupText = styled.div`
  height: 50px;
  width: 350px;
  padding: 20px;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
`;
export const SignupInput = styled.input`
  border-color: #f1f4f9;
  border-radius: 7px;
  height: 40px;
  width: 350px;
`;

export const SignupButton = styled.button`
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
export const PasswordText = styled.div`
  color: gray;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  width: 310px;
`;

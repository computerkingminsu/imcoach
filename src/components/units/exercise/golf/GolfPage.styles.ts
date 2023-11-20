import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 450px;
  width: 1100px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 250px;
  @media only screen and (max-width: 480px) {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: auto;
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1280px) {
    width: 90vw;
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

export const Sidebarlist = styled.div`
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

export const ContentsWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 20px;
  color: #454545;
  @media only screen and (max-width: 480px) {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1280px) {
    width: 100%;
  }
`;

export const Contents = styled.div`
  width: calc(33.33%);
  /* background-color: red; */
  :hover {
    opacity: 0.7;
  }
  /* margin-right: ; */
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: calc(50%);
  }
`;

export const PostTitle = styled.div`
  font-weight: 900;
  font-size: 20px;
  margin-top: 10px;
`;

export const PostPrice = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-top: 10px;
`;

export const PostWriter = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const PostImage = styled.img`
  margin-right: 6px;
  width: 270px;
  height: 175px;
  border-radius: 15px;
  overflow: hidden;
`;

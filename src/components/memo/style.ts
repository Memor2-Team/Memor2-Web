import styled from "styled-components";

export const MemoPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MemoContainer = styled.div`
  width: 80%;
  height: 85%;

  display: flex;
  flex-direction: column;

  padding: 20px 0;
`;

export const DateWrap = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
`;

export const CreateDate = styled.span`
  width: auto;
  height: auto;

  color: #777777;
  font-family: Pretendard-Bold;
  font-size: 1rem;

  margin-right: 20px;
`;

export const ModifyDate = styled.span`
  width: auto;
  height: auto;

  color: #777777;
  font-family: Pretendard-Bold;
  font-size: 1rem;
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: auto;

  margin-bottom: 50px;
`;

export const TitleBox = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Title = styled.span`
  width: 70%;

  color: #000;
  font-family: Pretendard-Bold;
  font-size: 2.2rem;
`;

export const Writer = styled.span`
  width: 25%;

  color: #777777;
  font-family: Pretendard-Bold;
  font-size: 1.05rem;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 70%;
`;

export const Content = styled.span`
  width: 100%;
  height: 100%;

  color: #000;
  font-family: Pretendard-Bold;
  font-size: 1.2rem;
`;

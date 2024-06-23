import styled from "styled-components";

export const MemoModifyPage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MemoModifyContainer = styled.div`
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

export const TitleWrap = styled.div`
  width: 100%;
  height: 15%;
`;

export const Title = styled.input`
  width: 100%;

  color: #000;
  font-family: Pretendard-Bold;
  font-size: 2.2rem;

  &::placeholder {
    color: #c5c5c5;
  }
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: calc(75% - 45px);
`;

export const Content = styled.textarea`
  width: 100%;
  height: 100%;

  color: #000;
  font-family: Pretendard-Bold;
  font-size: 1.2rem;

  border: none;
  resize: none;
  outline: none;

  &::placeholder {
    color: #c5c5c5;
  }
`;

export const ModifyButtonWrap = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ModifyButton = styled.button`
  width: 120px;
  height: 45px;

  color: #fff;
  font-family: Pretendard-Bold;
  font-size: 1.2rem;

  border-radius: 10px;
  background: #4caf50;

  cursor: pointer;
`;

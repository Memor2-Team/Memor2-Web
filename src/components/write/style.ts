import styled from "styled-components";

export const MemoWritePage = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MemoWriteContainer = styled.div`
  width: 80%;
  height: 75%;

  display: flex;
  flex-direction: column;

  padding: 20px 0;
`;

export const TitleWrap = styled.div`
  width: 100%;
  height: 20%;
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
  height: 80%;
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

export const CreateButtonWrap = styled.div`
  width: 80%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CreateButton = styled.button`
  width: 120px;
  height: 45px;

  color: #fff;
  font-family: Pretendard-Bold;
  font-size: 1.2rem;

  border-radius: 10px;
  background: #4caf50;

  cursor: pointer;
`;

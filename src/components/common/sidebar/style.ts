import styled from "styled-components";

export const Container = styled.div`
  min-width: 370px;
  height: 100%;

  display: flex;
  flex-direction: column;

  border-right: 1px solid #c9c9c9;
  background: #e8f5e9;
`;

export const UserInfoWrap = styled.div`
  width: 100%;
  height: 10%;

  display: flex;

  padding: 15px 25px;
`;

export const UserInfoBox = styled.div`
  width: auto;
  height: 45px;

  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;
`;

export const UserInfo = styled.img`
  width: 45px;
  height: 100%;

  margin-right: 10px;
`;

export const UserInfoText = styled.span`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 1.1rem;
`;

export const CategoryWrap = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AllButton = styled.button<{ $color: string }>`
  width: 40%;
  height: 100%;

  color: ${({ $color }) => ($color === "all" ? "#2E7D32" : "#000")};
  font-family: Pretendard-Bold;
  font-size: 1.4rem;

  cursor: pointer;
`;

export const MyButton = styled.button<{ $color: string }>`
  width: 40%;
  height: 100%;

  color: ${({ $color }) => ($color === "my" ? "#2E7D32" : "#000")};
  font-family: Pretendard-Bold;
  font-size: 1.4rem;

  cursor: pointer;
`;

export const MemoListWrap = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;
`;

export const MemoListButtonWrap = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
`;

export const MemoListTitle = styled.span`
  color: #000;
  font-family: Pretendard-Bold;
  font-size: 1.3rem;
`;

export const MemoCreateButton = styled.img`
  width: 18px;
  height: 18px;

  cursor: pointer;
`;

export const MemoList = styled.div`
  width: 100%;
  height: 90%;

  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Memo = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;

  border-top: 1px solid #998585;
  border-bottom: 1px solid #998585;
  background: #dadada;

  cursor: pointer;
  margin-bottom: 3px;

  &:hover {
    background: #2E7D32;

    & > div > span {
        color: #F2F2F2;
    }
  }
`;

export const MemoTitleWrap = styled.div`
    width: 84%;
    height: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 0 15px;
`

export const MemoTitle = styled.span`
    color: #777;
    font-family: Pretendard-Bold;
    font-size: 1rem;
`

export const MemoButtonWrap = styled.div`
    width: 8%;
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const MemoButton = styled.img`
    cursor: pointer;
`

import React from "react";
import * as S from "./style";
import useWrite from "src/hooks/write/useWrite";

const MemoWrite = () => {
  const { ...write } = useWrite();

  return (
    <S.MemoWritePage>
      <S.MemoWriteContainer>
        <S.TitleWrap>
          <S.Title
            value={write.title}
            placeholder="제목을 입력해주세요"
            onChange={write.handleChangeTitle}></S.Title>
        </S.TitleWrap>
        <S.ContentWrap>
          <S.Content
            value={write.content}
            placeholder="내용을 작성하세요"
            onChange={write.handleChangeContent}></S.Content>
        </S.ContentWrap>
      </S.MemoWriteContainer>
      <S.CreateButtonWrap>
        <S.CreateButton onClick={write.handleClickCreate}>생성하기</S.CreateButton>
      </S.CreateButtonWrap>
    </S.MemoWritePage>
  );
};

export default MemoWrite;

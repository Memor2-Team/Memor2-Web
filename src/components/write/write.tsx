import React from "react";
import * as S from "./style";

const MemoWrite = () => {
  return (
    <S.MemoWritePage>
      <S.MemoWriteContainer>
        <S.TitleWrap>
          <S.Title placeholder="제목을 입력해주세요"></S.Title>
        </S.TitleWrap>
        <S.ContentWrap>
          <S.Content placeholder="내용을 작성하세요"></S.Content>
        </S.ContentWrap>
      </S.MemoWriteContainer>
      <S.CreateButtonWrap>
        <S.CreateButton>생성하기</S.CreateButton>
      </S.CreateButtonWrap>
    </S.MemoWritePage>
  );
};

export default MemoWrite;

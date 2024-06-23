import React from "react";
import * as S from "./style";

const MemoModify = () => {
  return (
    <S.MemoModifyPage>
      <S.MemoModifyContainer>
        <S.DateWrap>
          <S.CreateDate>생성일자: 2024.06.22</S.CreateDate>
        </S.DateWrap>
        <S.TitleWrap>
          <S.Title value="안녕하세요" placeholder="제목을 입력해주세요"></S.Title>
        </S.TitleWrap>
        <S.ContentWrap>
          <S.Content value="안녕하세요" placeholder="내용을 작성하세요"></S.Content>
        </S.ContentWrap>
        <S.ModifyButtonWrap>
        <S.ModifyButton>수정하기</S.ModifyButton>
      </S.ModifyButtonWrap>
      </S.MemoModifyContainer>
    </S.MemoModifyPage>
  );
};

export default MemoModify;

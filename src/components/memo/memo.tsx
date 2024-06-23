import React from "react";
import * as S from "./style";

const Memo = () => {
  return (
    <S.MemoPage>
      <S.MemoContainer>
        <S.DateWrap>
          <S.CreateDate>생성일자: 2024.06.22</S.CreateDate>
          <S.ModifyDate>수정일자: 2024.06.22</S.ModifyDate>
        </S.DateWrap>
        <S.TitleWrap>
          <S.TitleBox>
            <S.Title>메모 제목</S.Title>
            <S.Writer>작성자: Park Sihyun</S.Writer>
          </S.TitleBox>
        </S.TitleWrap>
        <S.ContentWrap>
          <S.Content>메모 내용입니다.</S.Content>
        </S.ContentWrap>
      </S.MemoContainer>
    </S.MemoPage>
  );
};

export default Memo;

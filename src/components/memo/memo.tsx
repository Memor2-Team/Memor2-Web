import React from "react";
import * as S from "./style";
import useMemo from "src/hooks/memo/useMemo";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const Memo = () => {
  const { memoData } = useMemo();

  return (
    <S.MemoPage>
      <S.MemoContainer>
        <S.DateWrap>
          <S.CreateDate>
            생성일자:{" "}
            {dayjs(memoData.createdDateTime).locale("ko").format("YYYY.MM.DD")}
          </S.CreateDate>
          <S.ModifyDate>
            수정일자:{" "}
            {dayjs(memoData.modifiedDateTime).locale("ko").format("YYYY.MM.DD")}
          </S.ModifyDate>
        </S.DateWrap>
        <S.TitleWrap>
          <S.TitleBox>
            <S.Title>{memoData.title}</S.Title>
            <S.Writer>작성자: {memoData.author}</S.Writer>
          </S.TitleBox>
        </S.TitleWrap>
        <S.ContentWrap>
          <S.Content>{memoData.content}</S.Content>
        </S.ContentWrap>
      </S.MemoContainer>
    </S.MemoPage>
  );
};

export default Memo;

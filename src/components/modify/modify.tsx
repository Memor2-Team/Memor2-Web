import React from "react";
import * as S from "./style";
import useModify from "src/hooks/modify/useModify";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const MemoModify = () => {
  const { ...modify } = useModify();

  return (
    <S.MemoModifyPage>
      <S.MemoModifyContainer>
        <S.DateWrap>
          <S.CreateDate>
            생성일자:
            {dayjs(modify.createdDateTime).locale("ko").format("YYYY.MM.DD")}
          </S.CreateDate>
        </S.DateWrap>
        <S.TitleWrap>
          <S.Title
            value={modify.title}
            placeholder="제목을 입력해주세요"
            onChange={modify.handleChangeTitle}></S.Title>
        </S.TitleWrap>
        <S.ContentWrap>
          <S.Content
            value={modify.content}
            placeholder="내용을 작성하세요"
            onChange={modify.handleChangeContent}></S.Content>
        </S.ContentWrap>
        <S.ModifyButtonWrap>
          <S.ModifyButton onClick={modify.handleClickModify}>수정하기</S.ModifyButton>
        </S.ModifyButtonWrap>
      </S.MemoModifyContainer>
    </S.MemoModifyPage>
  );
};

export default MemoModify;

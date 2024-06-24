import React, { useState } from "react";
import * as S from "./style";
import { Memor2Axios } from "src/libs/axios/customAxios";

const MemoWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleClickCreate = async () => {
    try {
      await Memor2Axios.post("post", {}, {
        params: {
          title: title,
          content: content,
        },
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.MemoWritePage>
      <S.MemoWriteContainer>
        <S.TitleWrap>
          <S.Title
            value={title}
            placeholder="제목을 입력해주세요"
            onChange={handleChangeTitle}></S.Title>
        </S.TitleWrap>
        <S.ContentWrap>
          <S.Content
            value={content}
            placeholder="내용을 작성하세요"
            onChange={handleChangeContent}></S.Content>
        </S.ContentWrap>
      </S.MemoWriteContainer>
      <S.CreateButtonWrap>
        <S.CreateButton onClick={handleClickCreate}>생성하기</S.CreateButton>
      </S.CreateButtonWrap>
    </S.MemoWritePage>
  );
};

export default MemoWrite;

import React from "react";
import * as S from "./style";
import AllMemoImg from "src/assets/img/allMemo/AllMemo_Img.svg";

const AllMemo = () => {
  return (
    <S.AllMemoPage>
      <S.AllMemo src={AllMemoImg} />
    </S.AllMemoPage>
  );
};

export default AllMemo;

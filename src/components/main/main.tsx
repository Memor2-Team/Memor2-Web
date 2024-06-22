import React from "react";
import * as S from "./style";
import MainImg from "src/assets/img/main/Main_Img.svg";

const Main = () => {
  return (
    <S.MainPage>
      <S.Main src={MainImg} />
    </S.MainPage>
  );
};

export default Main;

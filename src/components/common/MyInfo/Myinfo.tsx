import React from "react";
import * as S from "./MyInfo.style";
import Vector from "src/assets/img/myInfo/Vector.svg";
import ReturnIcon from "src/assets/img/myInfo/Return_Icon.svg";
import useMyInfo from "src/hooks/myInfo/useMyInfo";

const Myinfo = () => {
  const { ...myInfo } = useMyInfo();

  return (
    <S.ProfileMain>
      <S.ReturnButton src={ReturnIcon} onClick={myInfo.handleClickReturn} />
      <S.ProfileContainer>
        <S.Vector src={Vector} />
        <S.NameT>{myInfo.userInfo.name}</S.NameT>
        <S.EmailT>{myInfo.userInfo.email}</S.EmailT>
      </S.ProfileContainer>
      <S.ButtonContainer>
        <S.Button onClick={myInfo.handleClickLogout}>로그아웃</S.Button>
      </S.ButtonContainer>
    </S.ProfileMain>
  );
};

export default Myinfo;

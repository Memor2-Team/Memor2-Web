import React from 'react'
import * as S from './MyInfo.style';
import { useNavigate } from 'react-router-dom';
import Vector from 'src/assets/img/Vector.svg';

const Myinfo = () => {
  const navigate = useNavigate();

  return (
    <S.ProfileMain>
        <S.ProfileContainer>
            <S.Vector src={Vector}/>
              <S.NameT>Park Sihyun</S.NameT>
              <S.EmailT>sihyunpark@gmail.com</S.EmailT>
        </S.ProfileContainer>
        <S.ButtonContainer>
            <S.Button onClick={() => navigate("/login")}>로그아웃</S.Button>
        </S.ButtonContainer>
    </S.ProfileMain>
  )
}

export default Myinfo
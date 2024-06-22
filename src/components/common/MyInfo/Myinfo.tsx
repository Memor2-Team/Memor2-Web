import React from 'react'
import * as S from './MyInfo.style';
import Vector from 'src/assets/img/Vector.svg';

const Myinfo = () => {
  return (
    <S.ProfileMain>
        <S.ProfileContainer>
            <S.Vector src={Vector}/>
              <S.NameT>Park Sihyun</S.NameT>
              <S.EmailT>sihyunpark@gmail.com</S.EmailT>
        </S.ProfileContainer>
        <S.ButtonContainer>
            <S.Button>로그아웃</S.Button>
        </S.ButtonContainer>
    </S.ProfileMain>
  )
}

export default Myinfo
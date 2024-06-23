import React from "react";
import MemoryLogo from 'src/assets/img/Memory Logo.svg';
import * as S from './signUp.style';

const SignUp = () => {
  return (
    <S.SignUpMain>
      <S.Left />
      <S.Container>
        <S.Leftbar>
          <S.MemoryLogo src={MemoryLogo} />
          <S.Title>Memory</S.Title>
          <S.SubTitle> Create your personal  </S.SubTitle>
          <S.SubTitle> memory hub </S.SubTitle>
        </S.Leftbar>
        <S.Rightbar>
          <S.SignUpT>Sign Up</S.SignUpT>
          <S.IDBox>
            <S.IDT>ID</S.IDT>
            <S.IDInput placeholder='Park Sihyun' />
          </S.IDBox>
          <S.EmailBox>
            <S.EmailT>Email</S.EmailT>
            <S.EmailInput placeholder='sihyunpark@gmail.com' />
          </S.EmailBox>
          <S.PasswordBox>
            <S.PasswordT>Password</S.PasswordT>
            <S.PasswordInput placeholder='Enter your Password' />
          </S.PasswordBox>
          <S.Button>Sign Up</S.Button>
        </S.Rightbar>
      </S.Container>
    </S.SignUpMain>
  );
};

export default SignUp;

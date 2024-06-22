import React from "react";
import MemoryLogo from 'src/assets/img/Memory Logo.svg';
import * as S from './signUp.style';

const SignUp = () => {
  return (
    <S.SignUpMain>
      <S.Leftbar>
        <S.MemoryLogo src={MemoryLogo} />
        <S.Title>Memory</S.Title>
        <S.SubTitle>Create your personal memory hub</S.SubTitle>
      </S.Leftbar>
      <S.Rightbar>
        <S.SignUpT>Sign Up</S.SignUpT>
        <S.IDT>ID</S.IDT>
        <S.IDInput placeholder='Park Sihyun' />
        <S.EmailT>Email</S.EmailT>
        <S.EmailInput placeholder='sihyunpark@gmail.com' />
        <S.PasswordT>Password</S.PasswordT>
        <S.PasswordInput placeholder='Enter your Password' />
        <S.Button><S.ButtonFont>Login</S.ButtonFont></S.Button>
      </S.Rightbar>
    </S.SignUpMain>
  );
};

export default SignUp;

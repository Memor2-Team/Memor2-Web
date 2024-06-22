import MemoryLogo from 'src/assets/img/Memory Logo.svg';
import * as S from './login.style';

const Login = () => {
  return (
    <S.LoginMain>
      <S.Leftbar>
        <S.MemoryLogo src={MemoryLogo} />
        <S.Title>Memory</S.Title>
        <S.SubTitle>Sign in to access your personal memory</S.SubTitle>
      </S.Leftbar>
      <S.Rigntbar>
        <S.LoginT>Login</S.LoginT>
        <S.EmailT>Email</S.EmailT>
        <S.EmailInput placeholder='sihyunpark@gmail.com' />
        <S.PasswordT>Password</S.PasswordT>
        <S.PasswordInput placeholder='Enter your Password' />
        <S.Button><S.ButtonFont>Login</S.ButtonFont></S.Button>
        <S.NewUser> New User <S.GoSignup href="">Sign Up</S.GoSignup></S.NewUser>
      </S.Rigntbar>
    </S.LoginMain>
  );
};

export default Login;

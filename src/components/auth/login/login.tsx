import MemoryLogo from 'src/assets/img/Memory Logo.svg';
import * as S from './login.style';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (
    <S.LoginMain>
      <S.Left />
      <S.Container>
        <S.Leftbar>
          <S.MemoryLogo src={MemoryLogo} />
          <S.Title>Memory</S.Title>
          <S.SubTitle>Sign in to access </S.SubTitle>
          <S.SubTitle> your personal memory</S.SubTitle>
        </S.Leftbar>
        <S.Rightbar>
          <S.LoginT>Log in</S.LoginT>
          <S.EmailBox>
            <S.EmailT>Email</S.EmailT>
            <S.EmailInput placeholder='sihyunpark@gmail.com' />
          </S.EmailBox>
          <S.PasswordBox>
            <S.PasswordT>Password</S.PasswordT>
            <S.PasswordInput placeholder='Enter your Password' />
          </S.PasswordBox>
          <S.Button onClick={() => navigate("/")}>Login</S.Button>
          <S.NewUser> New User? <S.GoSignup onClick={() => navigate("/signup")}>SignUp</S.GoSignup></S.NewUser>
        </S.Rightbar>
      </S.Container>
    </S.LoginMain>
  );
};

export default Login;

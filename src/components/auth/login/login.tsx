import MemoryLogo from "src/assets/img/common/Memory Logo.svg";
import PwViewIcon from "src/assets/img/common/PwView_Icon.svg";
import PwHideIcon from "src/assets/img/common/PwHide_Icon.svg";
import * as S from "./login.style";
import useLogin from "src/hooks/auth/useLogin";

const Login = () => {
  const { ...login } = useLogin();

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
            <S.EmailInput
              value={login.email}
              placeholder="sihyunpark@gmail.com"
              onChange={login.handleChangeEmail}
            />
          </S.EmailBox>
          <S.PasswordBox>
            <S.PasswordT>Password</S.PasswordT>
            <S.PasswordInput
              type={login.isPasswordBtn ? "text" : "password"}
              value={login.password}
              placeholder="Enter your Password"
              onChange={login.handleChangePassword}
              onKeyDown={login.handleKeyDown}
            />
            <S.PasswordButton src={login.isPasswordBtn ? PwViewIcon : PwHideIcon} onClick={login.handleClickPw} />
          </S.PasswordBox>
          <S.Button onClick={login.handleClickLogin}>Login</S.Button>
          <S.NewUser>
            {" "}
            New User? <S.GoSignup onClick={login.GoToSignUp}>SignUp</S.GoSignup>
          </S.NewUser>
        </S.Rightbar>
      </S.Container>
    </S.LoginMain>
  );
};

export default Login;

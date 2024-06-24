import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import token from "src/libs/token/token";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";
import { showToast } from "src/libs/toast/swal";

const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClickLogin();
    }
  };

  const GoToSignUp = () => {
    navigate("/sign-up");
  };

  const handleClickLogin = async () => {
    try {
      await axios.post(`${CONFIG.server}/auth/sign-in`, {
        email: email,
        password: password,
      }).then((res) => {
        token.setToken(ACCESS_TOKEN_KEY, res.data.data.accessToken);
        token.setToken(REFRESH_TOKEN_KEY, res.data.data.refreshToken);
        showToast("success", "로그인 성공");
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    email,
    password,
    handleChangeEmail,
    handleChangePassword,
    handleKeyDown,
    GoToSignUp,
    handleClickLogin,
  };
};

export default useLogin;

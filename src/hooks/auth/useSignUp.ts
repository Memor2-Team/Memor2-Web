import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import { showToast } from "src/libs/toast/swal";

const useSignUp = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClickSignUp();
    }
  };

  const handleClickSignUp = async () => {
    try {
      await axios.post(`${CONFIG.server}/auth/sign-up`, {
        name: id,
        email: email,
        password: password,
      }).then((res) => {
        console.log(res);
        showToast("success", "회원가입 성공");
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    id,
    email,
    password,
    handleChangeId,
    handleChangeEmail,
    handleChangePassword,
    handleKeyDown,
    handleClickSignUp,
  };
};

export default useSignUp;

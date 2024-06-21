import { Route, Routes } from "react-router-dom";
import Login from "src/components/auth/login/Login";
import SignUp from "src/components/auth/signUp/signUp";

const Router = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default Router;

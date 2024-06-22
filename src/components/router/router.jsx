import { Route, Routes } from "react-router-dom";
import Login from "src/components/auth/login/login";
import SignUp from "src/components/auth/signUp/signUp";
import MyInfo from "src/components/common/MyInfo/Myinfo";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/my-info" element={<MyInfo/>} />
    </Routes>
  );
};

export default Router;

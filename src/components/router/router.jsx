import { Route, Routes } from "react-router-dom";
import Login from "src/components/auth/login/login";
import SignUp from "src/components/auth/signUp/signUp";
import MainPage from "src/pages/main/page";
import AllMemoPage from "src/pages/allMemo/allMemo";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/all" element={<AllMemoPage />} />
    </Routes>
  );
};

export default Router;

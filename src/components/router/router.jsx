import { Route, Routes } from "react-router-dom";
import Login from "src/components/auth/login/login";
import SignUp from "src/components/auth/signUp/signUp";
import MainPage from "src/pages/main/page";
import MemoPage from "src/pages/memo/page";
import AllMemoPage from "src/pages/all/page";
import MemoWritePage from "src/pages/write/page";
import MemoModifyPage from "src/pages/modify/page"

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<MemoPage />} />
      <Route path="/all" element={<AllMemoPage />} />
      <Route path="/write" element={<MemoWritePage />} />
      <Route path="/modify/:id" element={<MemoModifyPage />} />
    </Routes>
  );
};

export default Router;

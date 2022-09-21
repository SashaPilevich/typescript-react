import { Route, Routes } from "react-router-dom";
import { EmailConfirmed } from "../pages/EmailConfirmed";
import { LoginPage } from "../pages/Login";
import { Main } from "../pages/Main";
import { RegisterSuccess } from "../pages/RegisterSuccess";
import { RegistrationPage } from "../pages/RegistrationPage";
import { SelectedPost } from "../pages/SelectedPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/selectedpost/:id" element={<SelectedPost />} />
      <Route path="/registersuccess" element={<RegisterSuccess />} />
      <Route path="/emailconfirmed" element={<EmailConfirmed />} />
    </Routes>
  );
};

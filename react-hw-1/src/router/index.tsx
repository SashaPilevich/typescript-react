import { Route, Routes } from "react-router-dom";
import { Activation } from "../pages/Activation";
import { AddPost } from "../pages/AddPost";
import { LoginPage } from "../pages/Login";
import { Main } from "../pages/Main";
import { MyPosts } from "../pages/MyPosts";
import { RegisterSuccess } from "../pages/RegisterSuccess";
import { RegistrationPage } from "../pages/RegistrationPage";
import { SelectedPost } from "../pages/SelectedPost";

export const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/registersuccess" element={<RegisterSuccess />} />
      <Route path="/activate/:uid/:token" element={<Activation />} />
      <Route path="/selectedpost/:id" element={<SelectedPost />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/myposts" element={<MyPosts />} />
    </Routes>
  );
};

import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllPosts } from "../../components/AllPosts";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { PostsTabs } from "../../components/PostsTabs";

export const Main = () => {
  return (
    <Container>
      <Header />
      <PostsTabs />
    </Container>
  );
};

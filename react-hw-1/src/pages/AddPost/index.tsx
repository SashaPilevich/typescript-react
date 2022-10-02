import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { AddPostItem } from "../../components/TemplateTitle";
import style from "./style.module.css";
export const AddPost = () => {
  return (
    <Container>
      <Header />
      <AddPostItem />
    </Container>
  );
};

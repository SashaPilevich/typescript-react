import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const RegisterSuccess = () => {
  return (
    <Container>
      <Header />
      <InfoTemplate
        title={"Registration Confirmation"}
        textFirst={"Please activate your account with"}
        textSecond={"the activation link in the email test@gmail.com"}
        textThird={"Please, check your email"}
        labelBtn={"Home"}
      />
    </Container>
  );
};

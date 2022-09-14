import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";

export const EmailConfirmed = () => {
  return (
    <Container>
      <Header />
      <InfoTemplate
        textFirst={"Email confirmed"}
        textSecond={"Your registration is now completed"}
        title={"Success"}
        labelBtn={"Login"}
      />
    </Container>
  );
};

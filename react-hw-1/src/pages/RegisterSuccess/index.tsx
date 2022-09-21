import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";
import style from "./style.module.css";

export const RegisterSuccess = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header />
      <InfoTemplate
        title={"Registration Confirmation"}
        onClick={navigateToHome}
        labelBtn={"Home"}
      >
        <p className={style.text}>Please activate your account with</p>
        <p className={style.text}>
          the activation link in the email{" "}
          <a className={style.link} href="#">
            test@gmail.com
          </a>
        </p>
        <p className={style.text}>Please, check your email</p>
      </InfoTemplate>
      <Button
        label={"Go Back"}
        onClick={goBack}
        type={"buttonForRegistration"}
      />
    </Container>
  );
};
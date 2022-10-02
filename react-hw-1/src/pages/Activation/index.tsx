import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { activateUser } from "../../api/auth";
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { InfoTemplate } from "../../components/InfoTemplate";
import style from "./style.module.css";

export const Activation = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const params = useParams();
  useEffect(() => {
    if (params.uid && params.token) {
      activateUser(params.uid, params.token);
    }
  }, []);
  return (
    <Container>
      <Header />
      <InfoTemplate
        children={
          <>
            <p className={style.textActivation}>Ваша регистрация завершена</p>
            <p className={style.textActivation}>
              Теперь вы можете залогиниться
            </p>
          </>
        }
        title={"Активация прошла успешно"}
        labelBtn={"Login"}
        onClick={navigateToLogin}
      />
    </Container>
  );
};

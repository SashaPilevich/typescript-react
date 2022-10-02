import {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useRef,
  useState,
} from "react";
import style from "./style.module.css";
import { Button } from "../Button";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import { login, getUser } from "../../api/auth";
import { validateEmail, validatePassword } from "../../utils/validation";
import { Preloader } from "../Preloader";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const refEmail = useRef(null);
  // const refPassword = useRef(null);
  const navigate = useNavigate();
  const { setUser, isDark } = useContext(Context);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    setError("");
    setIsLoading(true);
    const errors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };
    setEmailError(errors.email);
    setPasswordError(errors.password);

    event.preventDefault();
    const isValidForm = Object.values(errors).every((error) => error === "");
    if (isValidForm) {
      setError("");

      let isOk = true;
      login(email, password)
        .then((response) => {
          if (response.ok) {
            isOk = true;
          } else {
            isOk = false;
          }
          return response.json();
        })
        .then((json) => {
          if (isOk) {
            localStorage.setItem("access", json.access);
            localStorage.setItem("refresh", json.refresh);

            getUser()
              .then((response) => {
                return response.json();
              })
              .then((user) => {
                navigate("/");
                setUser(user);
              });
          } else {
            //обработка ошибок
            if (
              json.detail ===
              "No active account found with the given credentials"
            ) {
              setError(
                "Активная учетная запись с указанными учетными данными не найдена"
              );
              return;
            }
          }
        });
    }
  };

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateEmail(event.target.value); //if error TRUE
    if (error) {
      setEmailError(error); //return description of error
    } else {
      setEmailError("");
    }
    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validatePassword(event.target.value); //if error TRUE
    if (error) {
      setPasswordError(error); //return description of error
    } else {
      setPasswordError("");
    }
    setPassword(event.target.value);
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);
    setEmailError(error);
  };
  const handleEmailFocus = () => {
    setEmailError("");
  };

  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    setPasswordError(error);
  };
  const handlePasswordFocus = () => {
    setPasswordError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLoading ? (
        <div className={style.container}>
          <div className={style.inputContainer}>
            <Input
              label="Email"
              value={email}
              onChange={handleEmail}
              uniqType={"inputForRegistration"}
              // refObj={refEmail}
              onBlur={handleEmailBlur}
              onFocus={handleEmailFocus}
              error={emailError}
            />
          </div>
          <div className={style.inputContainer}>
            <Input
              label="Password"
              value={password}
              onChange={handlePassword}
              uniqType={"inputForRegistration"}
              // refObj={refPassword}
              type="password"
              onBlur={handlePasswordBlur}
              onFocus={handlePasswordFocus}
              error={passwordError}
            />
          </div>
          <p className={style.textError}>{error}</p>
          <Button
            type="buttonForRegistration"
            onClick={() => {}}
            label={"Login"}
          />
          <p className={`${style.text} ${isDark ? style.darkText : ""}`}>
            Forgot your password?{" "}
            <a
              className={`${style.linkLogin} ${
                isDark ? style.darkLinkLogin : ""
              }`}
              href="#"
            >
              Reset Password
            </a>
          </p>
        </div>
      ) : (
        <Preloader />
      )}
    </form>
  );
};

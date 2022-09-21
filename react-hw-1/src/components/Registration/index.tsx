import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validation";

export const Registration = () => {
  const [userName, setUserName] = useState("");
  const [userError, setUserError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const getUserName: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateRequired(event.target.value);
    if (error) {
      setUserError(error);
    } else {
      setUserError("");
    }
    setUserName(event.target.value);
  };
  const getEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const getPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const getConfirmPassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setConfirmPassword(event.target.value);
  };
  const onClickLogin = () => {
    const errors = {
      userName: validateRequired(userName),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
    };
    setUserError(errors.userName);
    setEmailError(errors.email);
    setPasswordError(errors.password);
    setConfirmPasswordError(errors.confirmPassword);
    const isValidForm = Object.values(errors).every((error) => error === "");
  };
  return (
    <form>
      <div className={style.container}>
        <div className={style.inputContainer}>
          <Input
            label="UserName"
            onChange={getUserName}
            value={userName}
            uniqType={"inputForRegistration"}
          />
        </div>
        <div className={style.inputContainer}>
          <Input
            label="Email"
            onChange={getEmail}
            value={email}
            uniqType={"inputForRegistration"}
          />
        </div>
        <div className={style.inputContainer}>
          <Input
            label="Password"
            onChange={getPassword}
            value={password}
            uniqType={"inputForRegistration"}
          />
        </div>
        <div className={style.inputContainer}>
          <Input
            label="Confirm Password"
            onChange={getConfirmPassword}
            value={confirmPassword}
            uniqType={"inputForRegistration"}
          />
        </div>
        <Button
          label="Login"
          onClick={onClickLogin}
          type={"buttonForRegistration"}
        />
        <p className={style.text}>
          If you have account, you can{" "}
          <Link className={style.linkLogin} to="/login">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

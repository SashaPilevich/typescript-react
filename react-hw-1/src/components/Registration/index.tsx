import { ChangeEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/auth";
import {
  validateConfirmPassword,
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validation";
import { Button } from "../Button";
import { Input } from "../Input";
import style from "./style.module.css";

export const Registration = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(true);
  const openPassword = () => {
    setShowPassword(false);
  };
  const closePassword = () => {
    setShowPassword(true);
  };

  const navigate = useNavigate();

  const handleUser: ChangeEventHandler<HTMLInputElement> = (event) => {
    const error = validateRequired(event.target.value); //if error TRUE
    if (error) {
      setUserError(error); //return description of error
    } else {
      setUserError("");
    }
    setUser(event.target.value);
    console.log(event.target.value);
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
  const handleConfirmPassword: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const error = validateConfirmPassword(password, confirmPassword); //if error TRUE
    if (error) {
      setConfirmPasswordError(error); //return description of error
    } else {
      setConfirmPasswordError("");
    }
    setConfirmPassword(event.target.value);
  };

  ///регистрация по клику
  const onClickLogin = () => {
    setError("");
    const errors = {
      user: validateRequired(user),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
    };
    setUserError(errors.user);
    setEmailError(errors.email);
    setPasswordError(errors.password);
    setConfirmPasswordError(errors.confirmPassword);

    const isValidForm = Object.values(errors).every((error) => error === "");

    if (isValidForm) {
      setError("");
      const promise = registerUser(user, email, password);
      let isOk = true;

      promise
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
            navigate("/registersuccess");
          } else {
            if (
              json?.username?.includes(
                "A user with that username already exists."
              )
            ) {
              setError("Пользователь с таким именем уже существует.");
              return;
            }
            if (json?.email?.includes("user with this Email already exists.")) {
              setError("Пользователь с таким email уже существует.");
              return;
            }
            if (
              json?.password?.includes(
                "This password is too short. It must contain at least 8 characters."
              )
            ) {
              setError("Пароль должен состоять не менее чем из 8 символов.");
              return;
            } else if (
              json?.password?.includes("This password is too common.")
            ) {
              setError("Этот пароль слишком распространен.");
              return;
            } else if (
              json?.password?.includes(
                "The password is too similar to the username."
              )
            ) {
              setError("Пароль слишком похож на имя пользователя.");
            }
          }
        });
    }
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

  const handleConfirmBlur = () => {
    const error = validateConfirmPassword(password, confirmPassword);
    setConfirmPasswordError(error);
  };
  const handleConfirmFocus = () => {
    setConfirmPasswordError("");
  };
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <Input
          label="UserName"
          onChange={handleUser}
          value={user}
          uniqType={"inputForRegistration"}
          error={userError}
        />
      </div>
      <div className={style.inputContainer}>
        <Input
          label="Email"
          onChange={handleEmail}
          value={email}
          uniqType={"inputForRegistration"}
          error={emailError}
          onBlur={handleEmailBlur}
          onFocus={handleEmailFocus}
        />
      </div>

      {showPassword ? (
        <div className={style.inputPasswordShow} onClick={openPassword}>
          <Input
            uniqType="inputForRegistration"
            label="Password"
            onChange={handlePassword}
            value={password}
            error={passwordError}
            onBlur={handlePasswordBlur}
            onFocus={handlePasswordFocus}
            type="password"
          />
        </div>
      ) : (
        <div className={style.inputPasswordClose} onClick={closePassword}>
          <Input
            uniqType="inputForRegistration"
            label="Password"
            onChange={handlePassword}
            value={password}
            error={passwordError}
            onBlur={handlePasswordBlur}
            onFocus={handlePasswordFocus}
            type="text"
          />
        </div>
      )}

      <div className={style.inputContainer}>
        <Input
          label="Confirm Password"
          onChange={handleConfirmPassword}
          value={confirmPassword}
          uniqType={"inputForRegistration"}
          error={confirmPasswordError}
          onBlur={handleConfirmBlur}
          onFocus={handleConfirmFocus}
          type="password"
        />
      </div>
      <p className={style.textError}>{error}</p>
      <Button
        label="Register"
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
  );
};

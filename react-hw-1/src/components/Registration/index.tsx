import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export const Registration = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const getUserName: ChangeEventHandler<HTMLInputElement> = (event) => {
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
          onClick={() => {}}
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

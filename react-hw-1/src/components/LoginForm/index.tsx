import { ChangeEventHandler, useState } from "react";
import style from "./style.module.css";
import { Button } from "../Button";
import { Input } from "../Input";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const submit = () => {
    alert(email + "" + password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <Input
          label={"Email"}
          value={email}
          onChange={handleEmail}
          uniqType={"inputForRegistration"}
        />
        <Input
          label={"Password"}
          value={password}
          onChange={handlePassword}
          uniqType={"inputForRegistration"}
        />
      </div>
      <Button type="buttonForRegistration" onClick={submit} label={"Login"} />
    </div>
  );
};

import style from "./style.module.css";
import { ChangeEventHandler } from "react";

interface Input {
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  type?: string;
  label?: string;
  id?: string;
  uniqType:
    | "burgerMenu"
    | "inputForConverter"
    | "primary"
    | "inputForRegistration"
    | "checkbox";
  refObj?: any;
}
const getInputStyle = (
  uniqType:
    | "burgerMenu"
    | "inputForConverter"
    | "primary"
    | "inputForRegistration"
    | "checkbox"
) => {
  if (uniqType === "burgerMenu") {
    return style.burgerMenu;
  }
  if (uniqType === "inputForConverter") {
    return style.inputForConverter;
  }
  if (uniqType === "primary") {
    return style.primary;
  }
  if (uniqType === "inputForRegistration") {
    return style.inputForRegistration;
  }
  if (uniqType === "checkbox") {
    return style.checkbox;
  }
};
export const Input = (props: Input) => {
  return (
    <div>
      <label className={style.label}>
        {props.label}
        <input
          className={`${style.input} ${getInputStyle(props.uniqType)}`}
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          ref={props.refObj}
          type={props.type}
        ></input>
      </label>
    </div>
  );
};

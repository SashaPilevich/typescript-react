import styles from "./style.module.css";
import { ChangeEventHandler } from "react";

interface Input {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
export const Input = (props: Input) => {
  return (
    <input
      className={styles.input}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
    ></input>
  );
};

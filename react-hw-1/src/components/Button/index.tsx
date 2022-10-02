import { useContext } from "react";
import { Context } from "../../App";
import style from "./style.module.css";

interface IButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type:
    | "primary"
    | "secondary"
    | "secondary2"
    | "delete"
    | "forTimer"
    | "buttonForRegistration"
    | "remove";
}

const getButtonStyle = (
  type:
    | "primary"
    | "secondary"
    | "secondary2"
    | "delete"
    | "forTimer"
    | "buttonForRegistration"
    | "remove"
) => {
  if (type === "primary") {
    return style.primary;
  }
  if (type === "secondary") {
    return style.secondary;
  }
  if (type === "secondary2") {
    return style.secondary2;
  }
  if (type === "delete") {
    return style.delete;
  }
  if (type === "forTimer") {
    return style.forTimer;
  }
  if (type === "buttonForRegistration") {
    return style.buttonForRegistration;
  }
  if (type === "remove") {
    return style.remove;
  }
};

export const Button = (props: IButton) => {
  const { isDark } = useContext(Context);
  return (
    <button
      className={`${style.button} ${
        isDark ? style.buttonDark : getButtonStyle(props.type)
      }`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

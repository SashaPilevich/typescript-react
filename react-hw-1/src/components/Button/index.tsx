import style from "./style.module.css";

interface IButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type: "primary" | "secondary" | "secondary2" | "delete";
}

const getButtonStyle = (
  type: "primary" | "secondary" | "secondary2" | "delete"
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
};

export const Button = (props: IButton) => {
  return (
    <button
      className={`${style.button} ${getButtonStyle(props.type)}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
};

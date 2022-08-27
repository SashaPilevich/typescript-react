import style from "./style.module.css";

interface IButton {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  type: "primary" | "secondary" | "secondary2";
}

const getButtonStyle = (type: "primary" | "secondary" | "secondary2") => {
  if (type === "primary") {
    return style.primary;
  }
  if (type === "secondary") {
    return style.secondary;
  }
  if (type === "secondary2") {
    return style.secondary2;
  }
};

export const Button = (props: IButton) => {
  return (
    <div className={style.buttonContainer}>
      <button
        className={`${style.button} ${getButtonStyle(props.type)}`}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
};

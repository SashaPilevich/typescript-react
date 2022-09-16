import { ReactNode } from "react";
import { Button } from "../Button";
import style from "./style.module.css";

interface IProps {
  title: string;
  children: ReactNode;
  labelBtn: string;
  onClick: () => void;
}
export const InfoTemplate = ({
  title,
  children,
  onClick,
  labelBtn,
}: IProps) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.textContainer}>{children}</div>
      <Button
        label={`${labelBtn}`}
        onClick={onClick}
        type="buttonForRegistration"
      />
    </div>
  );
};

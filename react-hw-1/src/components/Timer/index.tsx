import { useEffect, useState } from "react";
import { Button } from "../Button";
import style from "./style.module.css";
let intervalId: string | number | NodeJS.Timer | undefined;

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [isStart, setIsStart] = useState(false);

  const startTimer = () => {
    if (!isStart) {
      intervalId = setInterval(() => {
        return setCount((state) => state + 1);
      }, 1000);
    }
    return setIsStart(true);
  };
  const stopTimer = () => {
    if (isStart) {
      clearInterval(intervalId);
    }
    return setIsStart(false);
  };
  const resetTimer = () => {
    setCount(0);
    clearInterval(intervalId);
    return setIsStart(false);
  };
  return (
    <div className={style.container}>
      <h3 className={style.count}>{count}</h3>
      <Button label={"Start"} onClick={startTimer} type={"forTimer"} />
      <Button label={"Stop"} onClick={stopTimer} type={"forTimer"} />
      <Button label={"Reset"} onClick={resetTimer} type="forTimer" />
    </div>
  );
};

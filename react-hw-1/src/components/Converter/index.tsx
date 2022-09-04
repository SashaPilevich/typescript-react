import { ChangeEventHandler, useState } from "react";
import { Input } from "../Input";
import style from "./style.module.css";

export const Converter = () => {
  const [usd, setUsd] = useState(0);
  const [byn, setByn] = useState(0);

  const handleOnChangeUsd: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsd(Number(event.target.value));
    setByn(Number(event.target.value) * 2.52);
  };
  const handleOnChangeByn: ChangeEventHandler<HTMLInputElement> = (event) => {
    setByn(Number(event.target.value));
    setUsd(Number(event.target.value) / 2.52);
  };
  return (
    <div className={style.container}>
      <h2>Live currency converter</h2>
      <fieldset>
        <legend>Enter currency in $,USD: </legend>
        <Input
          onChange={handleOnChangeUsd}
          value={usd}
          uniqType={"inputForConverter"}
          type="text"
        />
      </fieldset>
      <fieldset>
        <legend>Enter currency in BYN:</legend>
        <Input
          onChange={handleOnChangeByn}
          value={byn}
          uniqType={"inputForConverter"}
          type="text"
        />
      </fieldset>
    </div>
  );
};

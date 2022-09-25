import { ChangeEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../Button";
import { Input } from "../Input";
import style from "./style.module.css";

export const TemplateTitle = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const [file, setFile] = useState<any>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<any>(null);
  const addImage: ChangeEventHandler<HTMLInputElement> = (event: any) => {
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={style.container}>
      <div className={style.infoPanel}>
        <button className={style.btnBack} onClick={goBack}>
          Back
        </button>
        <h2 className={style.title}>Template title</h2>
      </div>
      <div className={style.infoContainer}>
        <div className={style.inputContainer}>
          <label className={style.label}>
            Title
            <Input uniqType="inputForRegistration" />
          </label>
          <label className={style.label}>
            Lesson number
            <Input uniqType="inputForRegistration" />
          </label>

          <p className={style.textTextarea}>Text</p>
          <textarea className={style.textarea}></textarea>
        </div>
        <div className={style.imageContainer}>
          <p className={style.textImage}>Image</p>
          <label className={style.add}>
            {" "}
            Add
            <input
              type={"file"}
              className={style.inputFile}
              multiple
              accept="image/*"
              onChange={addImage}
            ></input>
          </label>

          <div className={style.imagePreview}>
            {imagePreviewUrl ? (
              <img className={style.addImg} src={imagePreviewUrl} alt="text" />
            ) : null}
          </div>
        </div>
      </div>
      <Button label={"Add"} onClick={() => {}} type="buttonForRegistration" />
    </div>
  );
};

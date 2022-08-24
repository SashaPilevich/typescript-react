import style from "./style.module.css";

interface IInput {
    placeholder?: string;
    type: string;
    text?: string;
}

export const Input = (props:IInput) => {
    return (
        <div className={style.inputContainer}>
            <label className={style.customCheckbox}>
            <input className={style.input} type={props.type} placeholder={props.placeholder} />
            <span className={style.text}>{props.text}</span>
            </label> 
        </div>
        
    )
}
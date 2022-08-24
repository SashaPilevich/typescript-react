import style from "./style.module.css"

interface IButton {
    label: string;
    onClick:() => void;
    disabled: boolean;
}

export const Button = (props:IButton) => {
    return(
        <div className={style.buttonContainer}>
            <button className={style.button} disabled={props.disabled} onClick={props.onClick}>{props.label}</button>
        </div>
        
    )
}
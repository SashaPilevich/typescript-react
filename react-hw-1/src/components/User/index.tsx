import style from "./style.module.css";

interface IUser {
    userName: string;
}

const getUser = (userName:string) => {
    let str = userName.split(' ');
    let result = str.map((item) => item[0])
    return result;
}
export const User = (props:IUser) => {
    return (
        <div className={style.userContainer}>
            <div className={style.userShort}>{getUser(props.userName)}</div>
            <div className={style.userFull}>
                {props.userName}
            </div>
            
        </div>
    )
}
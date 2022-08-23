import style from "./style.module.css";

interface IUser {
    userName: string;
}

const getUser = (userName:string) => {
    let str = userName.split(' ');
    let result = []
    for(let item of str) {
        result.push(item[0])
    }
    return result.join('')
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
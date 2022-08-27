import style from "./style.module.css";

interface IUser {
  userName: string;
  isDark: boolean;
}

const getUser = (userName: string) => {
  let str = userName.split(" ");
  let result = str.map((item) => item[0]);
  return result;
};

export const User = (props: IUser) => {
  return (
    <div
      className={`${style.userContainer} ${
        props.isDark ? style.userDarkFull : ""
      }`}
    >
      <div
        className={`${style.userShort} ${
          props.isDark ? style.userDarkShort : ""
        }`}
      >
        {getUser(props.userName)}
      </div>
      <p className={style.userFull}>{props.userName}</p>
    </div>
  );
};

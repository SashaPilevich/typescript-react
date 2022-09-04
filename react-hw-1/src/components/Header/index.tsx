import { ChangeEventHandler, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import style from "./style.module.css";
import img from "./ico.svg";

export const Header = () => {
  const test = () => {
    console.log("hi");
  };
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.burgerMenu} onClick={test}>
          <span className={style.linear1}></span>
          <span className={style.linear2}></span>
          <span className={style.linear3}></span>
        </div>
        <div className={style.user}>
          <img src={img} alt="UserIcon" />
          <p className={style.userName}>Username</p>
        </div>
      </div>
    </header>
  );
};
// export const NavMenu = () => {
//   return (
//     <div>
//       <ul>
//         <li>
//           <a>Login</a>
//         </li>
//         <li>
//           <a>Registration</a>
//         </li>
//       </ul>
//     </div>
//   );
// };

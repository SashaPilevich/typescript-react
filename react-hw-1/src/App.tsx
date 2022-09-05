import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Title } from "./components/Title";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { User } from "./components/User";
import { Clicker } from "./components/Clicker";
import { PostList } from "./components/Posts/List";
import { EmojiList } from "./components/Emoji/List";
import { posts } from "./mocks";
import { ListOfMyTodo } from "./components/Todo/List";
import { Converter } from "./components/Converter";
import { Time } from "./components/Time";
import { Timer } from "./components/Timer";
import { Registration } from "./components/Registration";
import { Header, NavMenu } from "./components/Header";

function App() {
  // const submit = () => {
  //   alert("Ваши данные обрабатываются");
  // };
  // const createForm = () => {
  //   alert("Заполните форму");
  // };

  return (
    <div className="App">
      {/* <Clicker /> */}
      <Header />
      <NavMenu />
      <Converter />
      <Time />
      <Timer />
      <Registration />
      <ListOfMyTodo />
      <PostList posts={posts} />
      <EmojiList />
      {/* <Title text={"Hello React!"} />
      <Input type="text" placeholder="Введите логин" />
      <Input type="text" placeholder="Введите пароль" />
      <Input type="checkbox" text="Согласен на обработку данных" />
      <Button
        type="primary"
        disabled={false}
        onClick={submit}
        label="Отправить"
      />
      <Button
        type="secondary"
        disabled={false}
        onClick={createForm}
        label="Регистрация"
      />
      <Button
        type="secondary2"
        disabled={false}
        onClick={createForm}
        label="Войти"
      />
      <User userName="Alexandra Pilevich" isDark={false} />
      <User userName="Alexandra Pilevich" isDark={true} /> */}
    </div>
  );
}

export default App;

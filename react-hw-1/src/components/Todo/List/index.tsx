import { ChangeEventHandler, useState } from "react";
import { generateUniqId } from "../../../mocks";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { HotAir } from "../HotAir";
import { ItemOfMyTodo } from "../Item";
import style from "./style.module.css";

interface ITodoList {
  id: string;
  title: string;
}
export const ListOfMyTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<ITodoList[]>([]);
  const handleOnChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    const newTodoItem = {
      title: title,
      id: generateUniqId(),
    };
    const newTodos = [...todos, newTodoItem];
    setTodos(newTodos);
  };
  const removeTodo = (id: string) => {
    const newTodo = todos.filter((item) => {
      if (id === item.id) {
        return false;
      }
      return true;
    });
    setTodos(newTodo);
  };
  return (
    <div className={style.containerList}>
      <div className={style.container}>
        <HotAir />
        <div className={style.start}>
          <h2 className={style.title}>Добавьте несколько дел</h2>
          <p className={style.text}>и сделайте ваш день продуктивным...</p>
          <div className={style.controlPanel}>
            <Input
              uniqType="primary"
              value={title}
              onChange={handleOnChangeTitle}
              placeholder="Название вашего важного дела"
            />
            <Button label={"Добавить"} onClick={addTodo} type={"primary"} />
          </div>
          {todos.map((item) => {
            const onClickRemove = () => {
              removeTodo(item.id);
            };
            return (
              <ItemOfMyTodo
                title={item.title}
                key={item.id}
                onClickRemove={onClickRemove}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

import { ItemOfPost } from "../Item";
import nature from "./nature.png";
import style from "./style.module.css";

export const generateDate = () => {
  const currentDate = new Date();
  let day = currentDate.getDate();
  let month = [currentDate.getMonth() + 1];
  let year = [currentDate.getFullYear()];

  return `${day} ${month} ${year}`;
};

export const generateUniqId = () => {
  return "_" + Math.random().toString(16).slice(2);
};

const posts = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: generateUniqId(),
    lesson_num: 1,
    title: "What is Lorem Ipsum?",
    author: 1,
    image: nature,
    date: generateDate(),
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: generateUniqId(),
    lesson_num: 2,
    title: "What is Lorem Ipsum?",
    author: 2,
    image: nature,
    date: generateDate(),
  },
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    id: generateUniqId(),
    lesson_num: 3,
    title: "What is Lorem Ipsum?",
    author: 3,
    image: nature,
    date: generateDate(),
  },
];
export const PostList = () => {
  return (
    <div className={style.container}>
      {posts.map((item) => {
        return (
          <ItemOfPost
            id={item.id}
            text={item.text}
            lesson_num={item.lesson_num}
            title={item.title}
            author={item.author}
            image={item.image}
            date={item.date}
          />
        );
      })}
    </div>
  );
};

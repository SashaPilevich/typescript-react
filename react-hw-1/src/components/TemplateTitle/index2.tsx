import { ChangeEventHandler, ReactEventHandler, useState } from "react";

import { Title } from "../Title";
import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "../Container";
import styles from "./styles.module.css";
import { createPost } from "../../api/posts";
import { useNavigate } from "react-router-dom";

export const AddPostForm = () => {
  // const [title, setTitle] = useState("");
  // const [number, setNumber] = useState("");
  // const [text, setText] = useState("");
  // const [image, setImage] = useState("");
  // const [file, setFile] = useState<File | null>(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  // const removeImage = () => {
  //   setImage("");
  //   setFile(null);
  // };
  // const createNewPost = () => {
  //   setIsLoading(true);
  //   const formData = new FormData();
  //   if (file) {
  //     formData.append("image", file);
  //   }
  //   formData.append("text", text);
  //   formData.append("lesson_num", number);
  //   formData.append("title", title);
  //   createPost(formData)
  //     .then((response) => {
  //       if (response.ok) {
  //         navigate("/myposts");
  //       }
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };
  // const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   const fileReader = new FileReader();
  //   const files = event.target.files;
  //   if (files?.length) {
  //     fileReader.readAsDataURL(files[0]);
  //     setFile(files[0]); //сохраняем файл
  //     fileReader.onload = (event: ProgressEvent<FileReader>) => {
  //       if (typeof event.target?.result === "string") {
  //         setImage(event.target?.result);
  //       }
  //     };
  //   }
  // };
  // return (
  //   <>
  //     <div className={styles.addPostIndex}>
  //       <Container>
  //         <div className={styles.addPostWrraper}>
  //           <Title text="Add new post" />
  //           <div className={styles.addPost}>
  //             <div className={styles.addText}>
  //               <Input
  //                 type="text"
  //                 placeholder="Title"
  //                 value={title}
  //                 onChange={(event) => setTitle(event.target.value)}
  //                 uniqType={"search"}
  //               />
  //               <Input
  //                 type="text"
  //                 placeholder="Lesson number"
  //                 value={number}
  //                 onChange={(event) => setNumber(event.target.value)}
  //                 uniqType={"search"}
  //               />
  //               <Input
  //                 value={text}
  //                 placeholder="Text"
  //                 onChange={(event) => setText(event.target.value)}
  //                 uniqType={"search"}
  //               />
  //             </div>
  //             <div className={styles.addImg}>
  //               {image ? (
  //                 <>
  //                   <img src={image} />
  //                   <Button
  //                     label="remove image"
  //                     onClick={removeImage}
  //                     type="primary"
  //                   />
  //                 </>
  //               ) : (
  //                 <p className={styles.addName}>Image</p>
  //               )}
  //               <div className={styles.addBtn}>
  //                 {image ? null : (
  //                   <>
  //                     <div style={{ position: "absolute" }}>
  //                       <Button
  //                         label="Add"
  //                         onClick={() => {}}
  //                         type="primary"
  //                       ></Button>
  //                       <input
  //                         className={styles.upload_button}
  //                         onChange={handleOnChange}
  //                         type={"file"}
  //                         accept="image/*"
  //                       ></input>
  //                     </div>
  //                   </>
  //                 )}
  //               </div>
  //             </div>
  //           </div>
  //           <div className={styles.addManeBtn}>
  //             <Button
  //               label="Add"
  //               onClick={createNewPost}
  //               type="buttonForRegistration"
  //             ></Button>
  //           </div>
  //         </div>
  //       </Container>
  //     </div>
  //     {/* <img
  //       src="../img/vectorForAdd.png"
  //       alt="vectorForAdd"
  //       className={styles.img}
  //     /> */}
  //   </>
  // );
};

import React, { useState } from "react";
import styles from "./Card.module.scss";
import StarIcon from "../StarIcon";
import XIcon from "../XIcon";
import PencilIcon from "../PencilIcon";
import ColorPicker from "../ColorPicker";
import { deleteTask, updateTask } from "../../lib/api";
import { ITask } from "../../types/Task";

interface ICard {
  title: string;
  description: string;
  color?: string;
  isFavorite: number | string;
  id?: number;
  onTaskDelete: ()=>void;
}

const Card = (props: ICard) => {
  const [color, setColor] = useState<string>(props.color ?? "#FFFFFF");
  const [update, setUpdate] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(props.title);
  const [id, setId] = useState<number>(props.id ?? 0);

  const [description, setDescription] = useState<string>(props.description);
  const [isImportant, setIsImportant] = useState(props.isFavorite);

  const handleClick = () => {
    setUpdate(!update);
    console.log("click");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("Title:", title);
      console.log("Description:", description);
      console.log("favorite:", isImportant);
      const task: ITask = {
        description: description,
        favorite: String(isImportant) ,
        title: title,
        id: id,
        color: color,
      };
      if (id!==0) {
        updateTask(String(id), task).then(()=> setUpdate(false));
        
      }
    }
  };

  const handleStarClick = () => {
    if (isImportant === 0) {
      setIsImportant(1);
    } else {
      setIsImportant(0);
    }
  };

  const handleDelete = () => {
    console.log(id)
    deleteTask(String(id)).then(()=>{props.onTaskDelete()})
  };

  return (
    <div className={styles.Card} style={{ backgroundColor: color }}>
      <div className={styles.titleContainer}>
        {!update ? (
          <h2>{title}</h2>
        ) : (
          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.titleInput}
          />
        )}
        <StarIcon
          isFavorite={isImportant}
          isUpdate={update}
          onClick={handleStarClick}
        />
      </div>
      {!update ? (
        <div className={styles.description}>{description}</div>
      ) : (
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Criar nota..."
          className={styles.descriptionInput}
        />
      )}
      <div className={styles.iconsContainer}>
        <div className={styles.iconsEditors}>
          <PencilIcon onClick={handleClick} />
          <ColorPicker setColor={setColor} />
        </div>
        <XIcon  onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Card;

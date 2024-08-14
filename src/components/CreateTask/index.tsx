import { useState } from "react";
import styles from "./CreateTask.module.scss";
import StarIcon from "../StarIcon";
import { createTask } from "../../lib/api";
import { ITask } from "../../types/Task";

interface ICreateTask {
  title?: string;
  description?: string;
  favorite?: boolean;
  onTaskCreated: () => void;
}

const CreateTask: React.FC<ICreateTask> = (props) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isImportant, setIsImportant] = useState(false);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const task:ITask = {
        title: title,
        description: description,
        favorite: isImportant ? '1' : '0',
        color: "#FFFFFF"
      }
      createTask(task).then(rs=>{
        setDescription('')
        setTitle('')
        setIsImportant(false)
        props.onTaskCreated()
      })
    }
  };

  const handleStarClick = () => {
    setIsImportant(!isImportant);
  };
  return (
    <div className={styles.CreateTask}>
      <div className={styles.titleContainer}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}  
          className={styles.title}
        />
         <StarIcon onClick={handleStarClick} isUpdate={true}/>
      </div>
      <hr className={styles.line} />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={handleKeyDown} 
        placeholder="Criar nota..."
        className={styles.description}
      />
    </div>
  );
};

export default CreateTask;

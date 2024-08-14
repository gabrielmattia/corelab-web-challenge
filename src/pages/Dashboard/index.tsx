import styles from "./Dashboard.module.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Vector } from "../../assets/Vector.svg";
import { Card, Search } from "../../components";
import { useEffect, useState } from "react";
import CriarTask from "../../components/CreateTask";
import { ITask } from "../../types/Task";
import { getTasks } from "../../lib/api";

const DashboardPage = () => {
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [tasks, setTasks] = useState<{ data: ITask[] } | undefined>(undefined);

  // Função para buscar tarefas
  const fetchTasks = async () => {
    setIsLoading(true);
    const payload = await getTasks();
    setTasks(payload);
    setIsLoading(false);
  };

  // UseEffect para carregar as tarefas quando o componente é montado
  useEffect(() => {
    fetchTasks();
  }, []);

  // Função para atualizar as tarefas após a criação de uma nova tarefa
  const handleTaskCreated = async () => {
    await fetchTasks();
  };

  // Função para filtrar as tarefas pelo título
  const filteredTasks = tasks?.data?.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.Dashboard}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <div>CoreNotes</div>
        </div>
        <Search
          className={styles.search}
          placeholder="Pesquisar notas"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.vectorContainer}>
          <Vector className={styles.vector} />
        </div>
      </header>
      <div className={styles.main}>
        <CriarTask onTaskCreated={handleTaskCreated} />
        <div className={styles.gridContainer}>
          <div className={styles.groupContainer}>
            <div className={styles.favorite}>Favorito</div>
            <div className={styles.cardsRow}>
              {isLoading ? (
                <div>Carregando...</div>
              ) : (
                filteredTasks
                  ?.filter((task) => task.favorite)
                  ?.map((task: ITask) => (
                    <div className={styles.card} key={task.id}>
                      <Card
                        title={task.title}
                        description={task.description}
                        isFavorite={task.favorite}
                        key={task.id}
                        id={task.id}
                        color={task.color}
                        onTaskDelete={handleTaskCreated}
                      />
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
        <div className={styles.gridContainer} style={{ marginBottom: "20px" }}>
          <div className={styles.groupContainer}>
            <div className={styles.other}>Outros</div>
            <div className={styles.cardsRow}>
              {isLoading ? (
                <div>Carregando...</div>
              ) : (
                filteredTasks
                  ?.filter((task) => !task.favorite)
                  ?.map((task: ITask) => (
                    <div className={styles.card} key={task.id}>
                      <Card
                        title={task.title}
                        description={task.description}
                        isFavorite={task.favorite}
                        key={task.id}
                        id={task.id}
                        color={task.color}
                        onTaskDelete={handleTaskCreated}
                      />
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

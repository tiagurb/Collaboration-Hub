import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTasks } from "../api";

function ListTask() {
  const [tasks, setTasks] = useState([]);
  // const [user, setUser] = useState([]);

  useEffect(() => {
    async function handleGetAllTasks() {
      const response = await getAllTasks();
      setTasks(response.data);
    }
    handleGetAllTasks();
  }, []);

  return (
    <>
      <h3>Tasks</h3>
      <ul>
        {tasks.map((task) => {
          return (
            <div key={task._id}>
              <div>
                <Link to={`/tasks/${task._id}`}>{task.title}</Link>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default ListTask;

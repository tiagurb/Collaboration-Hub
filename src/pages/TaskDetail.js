import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getTask, deleteTask } from "../api";
import TaskCreate from "./TaskCreate";

function TaskDetail() {
  const [task, setTask] = useState();
  const { taskId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetTaskDetail() {
      const response = await getTask(taskId);
      setTask(response.data);
    }

    handleGetTaskDetail();
  }, [taskId]);

  async function handleDeleteTask() {
    await deleteTask(taskId);
    navigate("/dashboard");
  }

  function handleUpdateTask () {
    navigate(`/tasks/update/${task._id}`)
  }

  return task ? (
    <>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {task.steps.map((step) => { 
          return (
            <ol>
              <li>{step}</li>
            </ol>
          );
        })}
      <h5>Users:</h5>
      {task.users.map((user) => { 
          return (
            <div>
              <p>{user}</p>
            </div>
          );
        })}
      <p>Created on {task.creation}</p>
      <p>Deadline: {task.deadline}</p>
      <div>
        <button onClick={handleUpdateTask}>Update Task</button>
        <button onClick={handleDeleteTask}>Delete Task</button>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default TaskDetail;
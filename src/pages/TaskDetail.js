import { Select } from "@chakra-ui/select";
import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getTask, deleteTask } from "../api";
import TaskCreate from "./TaskCreate";
import { updateTask } from "../api";

function TaskDetail() {
  const [task, setTask] = useState();
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("");

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

  function handleStatusChange(event) {
    setStatus(event.target.value);
  }

  function handleUpdateTask() {
    navigate(`/tasks/update/${task._id}`);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    await updateTask({
      status,
    });
  }
  //--------------------------------
  //update status does not work
  //----------------------------------
  return task ? (
    <>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <form onSubmit={handleSubmitForm}></form>
      <Select htmlFor="status" placeholder="" onChange={handleStatusChange}>
        <option value="to do">To Do</option>
        <option value="working">Working</option>
        <option html="complete">Complete</option>
      </Select>
      <Button type="submit">Update Status</Button>
      <form />
      {task.steps.map((step) => {
        return (
          <ol>
            <li key={step}>{step}</li>
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
        <Button onClick={handleUpdateTask}>Update Task</Button>
        <Button onClick={handleDeleteTask}>Delete Task</Button>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default TaskDetail;

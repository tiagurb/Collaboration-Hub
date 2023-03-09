import { Select } from "@chakra-ui/select";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
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
    const updatedTask = { ...task, status }; // create a new task object with updated status
    await updateTask(updatedTask); // call the updateTask API function with the updated task
    setTask(updatedTask); // update the task state with the updated task object
  }
  //--------------------------------
  //update status does not work
  //----------------------------------
  return task ? (
    <Center>
      <Card width="50vw">
        <CardBody>
          <Image src={`${task.image}`} alt={`${task.title}`} />
          <Heading size="lg">{task.title}</Heading>
          <Text>{task.description}</Text>

          <Center>
            <FormControl as={GridItem} colSpan={[6, 3]} maxW={600} mt={150}>
              <FormLabel htmlFor="status">Update the Task Status</FormLabel>
              <Select
                htmlFor="status"
                placeholder=""
                onChange={handleStatusChange}
              >
                <option value="to do">To Do</option>
                <option value="working">Working</option>
                <option html="complete">Complete</option>
              </Select>
              <Button type="submit" onClick={handleSubmitForm}>
                Update Status{" "}
              </Button>
            </FormControl>
          </Center>
          {/* <h5>Users:</h5>
      {task.users.map((user) => {
        return (
          <div>
            <p>{user}</p>
          </div>
        );
      })} */}
          <p>Created on {new Date(task.creation).toLocaleDateString()}</p>
          <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
          <div>
            <Button onClick={handleUpdateTask}>Update Task</Button>
            <Button onClick={handleDeleteTask}>Delete Task</Button>
          </div>
        </CardBody>
      </Card>
    </Center>
  ) : (
    <p>Loading...</p>
  );
}

export default TaskDetail;

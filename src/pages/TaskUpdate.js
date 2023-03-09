import {
  Button,
  Center,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateTask, getTask } from "../api";

function TaskUpdate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(0);
  const { taskId } = useParams();
  const [task, setTask] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetTaskDetail() {
      const response = await getTask(taskId);
      setTask(response.data);
    }
    handleGetTaskDetail();
  }, [taskId]);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleDeadlineChange(event) {
    setDeadline(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();

    await updateTask(taskId, {
      title,
      description,
      deadline,
    });

    toast.success("Task updated");
    navigate(`/tasks/${taskId}`);
  }

  return (
    <Center>
      <FormControl as={GridItem} colSpan={[6, 3]} maxW={600} mt={150}>
        <Heading mb="8" size="md">
          Update The Task Details
        </Heading>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input id="title" type="text" onChange={handleTitleChange} />
        <FormLabel htmlFor="description">Description</FormLabel>
        <Input
          id="description"
          type="text"
          onChange={handleDescriptionChange}
        />
        <FormLabel htmlFor="deadline">Deadline</FormLabel>
        <Input id="deadline" type="date" onChange={handleDeadlineChange} />

        <Button mt="6" type="submit" onClick={handleSubmitForm}>
          Update Task
        </Button>
      </FormControl>
    </Center>
  );
}

export default TaskUpdate;

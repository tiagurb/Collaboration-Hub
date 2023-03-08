import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { createTask, uploadImage } from "../api";

function TaskCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [deadline, setDeadline] = useState(0);
  const { projectId } = useParams();

  const navigate = useNavigate();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  function handleDeadlineChange(event) {
    setDeadline(event.target.value);
  }

  async function handleSubmitForm() {
    console.log({ title, description, deadline });

    //1. Upload the image through the backend

    const uploadData = new FormData();
    uploadData.append("filename", image);
    console.log();
    let response = null;
    if (uploadData["filename"]) {
      response = await uploadImage(uploadData);
    }

    //2. Once we get the image Url -> create a project
    //with title, description and imageUrl
    await createTask(
      {
        title,
        description,
        deadline,
        imageUrl: response ? response.data.fileUrl : "",
      },
      projectId
    );

    toast.success("Task created");
    navigate("/dashboard");
  }

  return (
    <>
      <Center>
        <FormControl as={GridItem} colSpan={[6, 3]} maxW={600} mt={150}>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              maxW="60vw"
              id="title"
              type="text"
              onChange={handleTitleChange}
            />

            <FormLabel htmlFor="description">Description</FormLabel>
            <Input
              id="description"
              type="text"
              onChange={handleDescriptionChange}
            />
            <FormLabel htmlFor="deadline">Deadline</FormLabel>
            <Input id="deadline" type="date" onChange={handleDeadlineChange} />
            <FormLabel htmlFor="image">Image</FormLabel>
            <input
              id="image"
              name="filename"
              type="file"
              onChange={handleImageChange}
            />
            <Button type="submit" onClick={handleSubmitForm}>
              Create Task
            </Button>
        </FormControl>
      </Center>
    </>
  );
}

export default TaskCreate;

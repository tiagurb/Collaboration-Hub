import {
  Button,
  Flex,
  FormControl,
  FormLabel,
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

  async function handleSubmitForm(event) {
    event.preventDefault();
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
      <FormControl onSubmit={handleSubmitForm}>
      <Flex wrap="wrap">
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input maxW="60vw" id="title" type="text" onChange={handleTitleChange} />

        <FormLabel htmlFor="description">Description</FormLabel>
        <Input
          id="description"
          type="text"
          onChange={handleDescriptionChange}
        />
        <FormLabel htmlFor="image">Image</FormLabel>
        <button
          id="image"
          name="filename"
          type="file"
          onChange={handleImageChange}
        />
        <FormLabel htmlFor="deadline">Deadline</FormLabel>
        <Input id="deadline" type="date" onChange={handleDeadlineChange} />

        <Button type="submit">Create Task</Button>
        </Flex>
      </FormControl>
    </>
  );
}

export default TaskCreate;

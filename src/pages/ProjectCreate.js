import { useState } from "react";
import { toast } from "react-toastify";
import { createProject } from "../api";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  GridItem,
  Input,
} from "@chakra-ui/react";

function ProjectCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  async function handleSubmitForm() {

    await createProject({
      title,
      description,
    });

    toast.success("Project created");
    navigate("/dashboard");
  }

  return (
    <>
      <Center>
        <FormControl
          as={GridItem}
          colSpan={[6, 3]}
          maxW={600}
          mt={150}
        >
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" type="text" onChange={handleTitleChange} />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            type="text"
            onChange={handleDescriptionChange}
          />
          <Button type="submit" onClick={handleSubmitForm} mt={50}>
            Create Project
          </Button>
        </FormControl>
      </Center>
    </>
  );
}

export default ProjectCreate;

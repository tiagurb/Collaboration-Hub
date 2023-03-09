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
  Heading,
  Input,
} from "@chakra-ui/react";
import { uploadImage } from "../api";

function ProjectCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  async function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  async function handleSubmitForm() {
    const uploadData = new FormData();
    uploadData.append("filename", image);
    const response = await uploadImage(uploadData);
    console.log(response.data.fileUrl);
    await createProject({
      title,
      description,
      image: response.data.fileUrl,
    });

    toast.success("Project created");
    navigate("/dashboard");
  }

  return (
    <>
      <Center>
        <FormControl as={GridItem} colSpan={[6, 3]} maxW={600} mt={150}>
          <Heading mb="8" size="md">
            Create a New Project
          </Heading>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" type="text" onChange={handleTitleChange} />
          <FormLabel htmlFor="description">Description</FormLabel>
          <Input
            id="description"
            type="text"
            onChange={handleDescriptionChange}
          />
          <FormLabel htmlFor="image">Image</FormLabel>
          <input
            id="image"
            name="filename"
            type="file"
            onChange={handleImageChange}
          />
          <Button
            type="submit"
            onClick={handleSubmitForm}
            mt={50}
            className="formBtn"
          >
            Create Project
          </Button>
        </FormControl>
      </Center>
    </>
  );
}

export default ProjectCreate;

import { useState } from "react";
import { toast } from "react-toastify";
import { createProject } from "../api";
import { useNavigate } from "react-router-dom";

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

  async function handleSubmitForm(event) {
    event.preventDefault();

    await createProject({
      title,
      description,
    });

    toast.success("Project created");
    navigate("/dashboard");
  }

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" onChange={handleTitleChange} />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          onChange={handleDescriptionChange}
        />
        <button type="submit">Create Project</button>
      </form>
    </>
  );
}

export default ProjectCreate;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createTask, uploadImage } from "../api";

function Task() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const [deadline, setDeadline] = useState(0);

  const navigate = useNavigate();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleStepsChange(event) {
    setSteps(event.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  function handleDeadlineChange(event) {
    setDeadline(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    console.log({ title, description, steps, deadline });

    //1. Upload the image through the backend

    const uploadData = new FormData();
    uploadData.append("filename", image);
    const response = await uploadImage(uploadData);
    console.log("response from the backend with image url", response.data);

    //2. Once we get the image Url -> create a project
    //with title, description and imageUrl
    await createTask({
      title,
      description,
      steps,
      deadline,
      imageUrl: response.data.fileUrl,
    });

    toast.success("Task created");
    navigate("/");
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
        <label htmlFor="steps">Steps</label>
        <input id="steps" type="text" onChange={handleStepsChange} />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="filename"
          type="file"
          onChange={handleImageChange}
        />
        <label htmlFor="deadline">Deadline</label>
        <input id="deadline" type="date" onChange={handleDeadlineChange} />

        <button type="submit">Create Task</button>
      </form>
    </>
  );
}

export default Task;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { updateTask, getTask, uploadImage } from "../api";

function TaskUpdate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
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
    await updateTask({
      title,
      description,
      steps,
      deadline,
      imageUrl: response.data.fileUrl,
    });

    toast.success("Task updated");
    navigate(`/tasks/${task.id}`);
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

        <button type="submit">Update Task</button>
      </form>
    </>
  );
}

export default TaskUpdate;

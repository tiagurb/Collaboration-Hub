import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteProject, getProject, getTask } from "../api";

function ProjectDetail() {
  const [project, setProject] = useState(null);
  const [task, setTask] = useState([]);
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetProjectDetail() {
      const response = await getProject(projectId);
      setProject(response.data);
    }


    handleGetProjectDetail();
  }, [projectId]);

  async function handleDeleteProject() {
    await deleteProject(projectId);
    navigate("/dashboard");
  }

  function handleCreateTask() {
    navigate(`/tasks/create/${project._id}`);
  }

  return project ? (
    <>
      <h1>{project.title}</h1>

      <div>
        <h2>To Do</h2>
        {project.tasks.map((task) => {
          return (
            task.status === "to do" && (
              <div key={task._id}>
                <div>
                  <Link to={`/tasks/${task._id}`}>{task.title}</Link>
                </div>
              </div>
            )
          );
        })}
      </div>

      <div>
        <h2>Doing</h2>
        {project.tasks.map((task) => {
          return (
            task.status === "doing" && (
              <div key={task._id}>
                <div>
                  <Link to={`/tasks/${task._id}`}>{task.title}</Link>
                </div>
              </div>
            )
          );
        })}
      </div>

      <div>
        <h2>Complete</h2>
        {project.tasks.map((task) => {
          return (
            task.status === "complete" && (
              <div key={task._id}>
                <div>
                  <Link to={`/tasks/${task._id}`}>{task.title}</Link>
                </div>
              </div>
            )
          );
        })}
      </div>

      <div>
        <button onClick={handleCreateTask}>Create a new Task</button>
      </div>
      <div>
        <button onClick={handleDeleteProject}>Delete Project</button>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProjectDetail;

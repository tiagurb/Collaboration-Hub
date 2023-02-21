import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteProject, getProject } from "../api";
import TaskCreate from "./TaskCreate";

function ProjectDetail() {
  const [project, setProject] = useState();
  const [task, setTask] = useState();
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
<<<<<<< HEAD
    <Link to={`/tasks/create/${project._id}`} />;
=======
    navigate(`/tasks/create/${project._id}`);
>>>>>>> cfb595da6ef6acbc616aa19c9757b99e42a8d056
  }

  return project ? (
    <>
      {console.log(project.title)}
      <h3>{project.title}</h3>
      {project.tasks.map((task) => {
        return (
          <div key={task._id}>
            <div>
              <Link to={`/tasks/${task._id}`}>{task.title}</Link>
            </div>
          </div>
        );
      })}
      <div>
        <button onClick={handleCreateTask}>Create a new Task</button>
      </div>
      {/* <TaskCreate/> */}
      <div>
        <button onClick={handleDeleteProject}>Delete Project</button>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProjectDetail;

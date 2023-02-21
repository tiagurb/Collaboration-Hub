import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteProject, getProject } from "../api";

function ProjectDetail() {
  const [project, setProject] = useState();
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
        {/* {if (stau)} */}
      </div>
        
      <div>
        <h2>Doing</h2>
      </div>
      
      <div>
        <h2>Complete</h2>
      </div>
      
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

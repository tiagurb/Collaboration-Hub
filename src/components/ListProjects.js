import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../api";

function ListProjects() {
  const [projects, setProjects] = useState([]);
  // const [user, setUser] = useState([]);

  useEffect(() => {
    async function handleGetAllProjects() {
      const response = await getAllProjects();
      setProjects(response.data);
    }
    handleGetAllProjects();
  }, []);



  return (
    <>
      <h3>Projects</h3>
      <ul>
        {projects.map((project) => { 
          return (
            <div key={project._id}>
              <div><Link to={`/project/${project._id}`}>{project.title}</Link></div>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default ListProjects;

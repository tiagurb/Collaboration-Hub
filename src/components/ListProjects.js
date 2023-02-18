import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../api";

function ListProjects() {
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function handleGetAllProjects() {
      // const response = await axios.get("http://localhost:5005/api/projects");
      //we got the api to get the url automatically
      const response = await getAllProjects();
      setProjects(response.data);
    }
    handleGetAllProjects();
  }, []);



  return (
    <>
      <h3>Projects</h3>
      <ul>
        {user.projects.map((project) => {
          return (
            <li key={project._id}>
              <div><Link to={`/projects/${project._id}`}>{project.title}</Link></div>
              <div>{project.imageUrl && (
                <img
                  style={{ width: "200px" }}
                  src={project.imageUrl}
                  alt={project.title}
                />
              )}  
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListProjects;

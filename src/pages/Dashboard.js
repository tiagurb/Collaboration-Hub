import ListProjects from "../components/ListProjects";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();

  function handleCreateNewProject() {
    navigate("/project/create");
  }
  return (
    <>
      <ListProjects />
      <button onClick={handleCreateNewProject}>Create New Project</button>
    </>
  );
}

export default Dashboard;

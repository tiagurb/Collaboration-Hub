import ListProjects from "../components/ListProjects";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();

  function handleCreateNewProject() {
    navigate("/project/create");
  }
  return (
    <div ml={{xl: 500}}>
      
      <ListProjects />

    </div>
  );
}

export default Dashboard;

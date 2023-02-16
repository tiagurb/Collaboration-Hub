import "./App.css";
import ListProjects from "./pages/ListProjects";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProject from "./pages/AddProject";
import ProjectDetail from "./pages/ProjectDetail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<ListProjects />} />
        <Route path="/projects" element={<ListProjects />} />
        <Route
          path="/projects/add"
          element={
            <IsPrivate>
              <AddProject />
            </IsPrivate>
          }
        />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

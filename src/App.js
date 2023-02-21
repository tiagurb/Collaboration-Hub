import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import ListProjects from "./components/ListProjects";
import ListTask from "./components/ListTask";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProjectDetail from "./pages/ProjectDetail";
import Signup from "./pages/Signup";
import TaskCreate from "./pages/TaskCreate";
import TaskDetail from "./pages/TaskDetail";
import TaskUpdate from "./pages/TaskUpdate";

function App() {
  return (
    <div className="App">
      <ToastContainer
      // position="top-right"
      // autoClose={5000}
      // hideProgressBar={false}
      // newestOnTop={false}
      // closeOnClick
      // rtl={false}
      // pauseOnFocusLoss
      // draggable
      // pauseOnHover
      // theme="dark"
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<ListProjects />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        {/* <Route
          path="/projects/add"
          element={
            // <IsPrivate>
            //   <AddProject />
            // </IsPrivate>
          }
        /> */}
        {/* <Route path="/projects/:projectId" element={<ProjectDetail />} /> */}
        <Route path="/tasks" element={<ListTask />} />
        <Route path="/tasks/:taskId" element={<TaskDetail />} />
        <Route path="/tasks/update/:taskId" element={<TaskUpdate />} />
        <Route path="/tasks/create/:projectId" element={<TaskCreate />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

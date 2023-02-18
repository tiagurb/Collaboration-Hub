import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Task from "./pages/Task";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/projects" />
        {/* <Route
          path="/projects/add"
          element={
            // <IsPrivate>
            //   <AddProject />
            // </IsPrivate>
          }
        /> */}
        {/* <Route path="/projects/:projectId" element={<ProjectDetail />} /> */}
        <Route path="/task" element={<Task />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

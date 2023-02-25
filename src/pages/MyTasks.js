import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { getAllTasks } from "../api";
import { UserContext } from "../context/user.context";


function MyTasks () {
    const { loggedUser } = useContext(UserContext);
    const [task, setTask] = useState();


  

  useEffect(() => {
    async function handleGetTask() {
      const response = await getAllTasks();
      setTask(response.data);
    }

    handleGetTask();
  });


return task ? (
    <>
      <div>
      {tasks.map((task) => {
            task.users === loggedUser.username && (
              <div key={task._id}>
                <div>
                  <Link to={`/tasks/${task._id}`}>{task.title}</Link>
                </div>
              </div>
            )
          ;
        })}
      </div>


    </>
  ) : (
    <p>Loading...</p>
  )
}

export default MyTasks
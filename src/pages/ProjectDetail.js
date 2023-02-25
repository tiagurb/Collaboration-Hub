import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteProject, getProject, getTask } from "../api";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { Divider, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";

function ProjectDetail() {
  const [project, setProject] = useState(null);
  // const [task, setTask] = useState([]);
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
      <Heading as='h1' size='4xl' noOfLines={1}>{project.title}</Heading>
      <div className="taskState">
        <div>
          <Heading mb="10" as='h2' size='2xl'>To Do</Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {project.tasks.map((task) => {
              return (
                task.status === "to do" && (
                  <Card>
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Deadline: {task.deadline}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button>
                          <Link to={`/tasks/${task._id}`}>See Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              );
            })}
          </SimpleGrid>
        </div>

        <div>
          <Heading mb="10" as='h2' size='2xl'>Doing</Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {project.tasks.map((task) => {
              return (
                task.status === "doing" && (
                  <Card>
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Deadline: {task.deadline}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button>
                          <Link to={`/tasks/${task._id}`}>See Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              );
            })}
          </SimpleGrid>
        </div>

        <div>
          <Heading mb="10" as='h2' size='2xl'>Complete</Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {project.tasks.map((task) => {
              return (
                task.status === "complete" && (
                  <Card>
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Deadline: {task.deadline}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button>
                          <Link to={`/tasks/${task._id}`}>See Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                )
              );
            })}
          </SimpleGrid>
        </div>
      </div>
      <div>
        <button onClick={handleCreateTask}>Create a new Task</button>
      </div>
      <div>
        <button onClick={handleDeleteProject}>Delete Project</button>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProjectDetail;
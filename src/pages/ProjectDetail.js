import { useEffect, useState, ReactElement } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { deleteProject, getProject } from "../api";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Heading, Highlight } from "@chakra-ui/layout";

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
      <Heading size="lg" fontSize="50px" mb="10">
        {project.title}
      </Heading>
      <div className="taskList">
        <div>
          <Heading lineHeight="tall">
            <Highlight
              query="To Do"
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              To Do
            </Highlight>
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {project.tasks.map((task) => {
              return (
                task.status === "to do" && (
                  <Card align="center" styles={{ backgroundColor: "#FFFFFF" }}>
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>
                        Deadline: {new Date(task.deadline).toLocaleDateString()}
                      </Text>
                      <Text>Task Owners: {task.users}</Text>
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
          <Heading lineHeight="tall">
            <Highlight
              query="Working"
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              Working
            </Highlight>
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {project.tasks.map((task) => {
              return (
                task.status === "working" && (
                  <Card align="center">
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>
                        Deadline: {new Date(task.deadline).toLocaleDateString()}
                      </Text>
                      <Text>Task Owners: {task.users}</Text>
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
          <Heading lineHeight="tall">
            <Highlight
              query="Complete"
              styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}
            >
              Complete
            </Highlight>
          </Heading>
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          >
            {project.tasks.map((task) => {
              return (
                task.status === "complete" && (
                  <Card align="center">
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>
                        Deadline: {new Date(task.deadline).toLocaleDateString()}
                      </Text>
                      <Text>Task Owners: {task.users}</Text>
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
        <Button onClick={handleCreateTask}>Create a new Task</Button>
      </div>
      <div>
        <Button onClick={handleDeleteProject}>Delete Project</Button>
      </div>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ProjectDetail;

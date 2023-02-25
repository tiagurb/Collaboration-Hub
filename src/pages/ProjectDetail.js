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
import {
  Divider,
  Heading,
  Highlight,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";

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
      <Heading size="lg" fontSize="50px">
        {project.title}
      </Heading>
      <div className="taskState">
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
                  <Card>
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>
                        Deadline: {new Date(task.deadline).toLocaleDateString()}
                      </Text>
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
                task.status === "doing" && (
                  <Card>
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Deadline: {new Date(task.deadline).toLocaleDateString()}</Text>
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
                  <Card>
                    <CardHeader>
                      <Heading size="md"> {task.title} </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text>Deadline: {new Date(task.deadline).toLocaleDateString()}</Text>
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

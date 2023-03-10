import {
  Box,
  Center,
  Heading,
  HStack,
  Img,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProjects } from "../api";

function ListProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function handleGetAllProjects() {
      const response = await getAllProjects();
      setProjects(response.data);
    }
    handleGetAllProjects();
  }, []);

  return projects ? (
    <>
      <Heading
        size="3xl"
        mb="30"
        pb={"25"}
        bgClip="text"
        bgGradient="linear(to-l, #2892C6, #C23156)"
        as="extrabold"
      >
        Projects
      </Heading>
      <ul>
        {projects.map((project) => {
          return (
            <>
              <Center py={6} key={project._id}>
                <Box
                  w="xs"
                  rounded={"sm"}
                  my={5}
                  mx={[0, 5]}
                  overflow={"hidden"}
                  bg="white"
                  border={"1px"}
                  borderColor="black"
                >
                  <Box h={"200px"} borderBottom={"1px"} borderColor="black">
                    <Img
                      src={`${project.image}`}
                      roundedTop={"sm"}
                      objectFit="cover"
                      h="full"
                      w="full"
                      alt={"Blog Image"}
                    />
                  </Box>
                  <Box>
                    <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
                      {project.title}
                    </Heading>
                    <Text color={"gray.500"} noOfLines={2}>
                      {project.description}
                    </Text>
                  </Box>
                  <HStack borderTop={"1px"} color="black">
                    <Text
                      p={4}
                      alignItems="center"
                      justifyContent={"space-between"}
                      roundedBottom={"sm"}
                      cursor={"pointer"}
                      w="full"
                      fontSize={"md"}
                      fontWeight={"semibold"}
                    >
                      <Link to={`/project/${project._id}`}>View Tasks</Link>
                    </Text>
                  </HStack>
                </Box>
              </Center>
            </>
          );
        })}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
}

export default ListProjects;

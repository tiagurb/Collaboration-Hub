import React from "react";
import {
  chakra,
  Container,
  Stack,
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

function Guide() {
  const overviewList = [
    {
      id: 1,
      label: "Login to your account",
      subLabel: "Sign up if you don't have an account already!",
    },
    {
      id: 2,
      label: "Create a Project",
      subLabel: "Click on the create project button and fill out the details.",
    },
    {
      id: 3,
      label: "Create a task",
      subLabel:
        "After you create a project you can create one or multiple tasks inside your project.",
    },
    {
      id: 4,
      label: "Manage your tasks",
      subLabel: "Inside your project, you can manage your tasks status.",
    },
    {
      id: 5,
      label: "Made a mistake?",
      subLabel:
        "No problem, you can always update your task, just click Update Task.",
    },
    {
      id: 6,
      label: "Tired of your project?",
      subLabel:
        "We also have an option in case you don't want to work on the project anymore, just delete it by clicking on the big red button.",
    },
  ];

  return (
    <>
      <Container maxW="6xl" py={5}>
        <chakra.h2
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          mb={10}
          bgClip="text"
          bgGradient="linear(to-l, #2892C6, #C23156)"
        >
          How it works?
        </chakra.h2>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 0, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            spacing={6}
            alignItems="flex-start"
            mb={{ base: 5, md: 0 }}
            maxW="md"
          >
            {overviewList.map((data) => (
              <Box key={data.id}>
                <HStack spacing={2}>
                  <Flex
                    fontWeight="bold"
                    boxShadow="md"
                    color="white"
                    bgGradient="linear(to-l, #2892C6, #C23156)"
                    rounded="full"
                    justifyContent="center"
                    alignItems="center"
                    w={10}
                    h={10}
                  >
                    {data.id}
                  </Flex>
                  <Text fontSize="xl">{data.label}</Text>
                </HStack>
                <Text fontSize="md" textAlign="left" color="gray.500" ml={12}>
                  {data.subLabel}
                </Text>
              </Box>
            ))}
          </VStack>
          <Image
            boxSize={{ base: "auto", md: "lg" }}
            objectFit="contain"
            src="https://res.cloudinary.com/doti6zlah/image/upload/v1678291234/12083683_Wavy_Bus-32_Single-12_u9sj6i.jpg"
            rounded="lg"
          />
        </Stack>
      </Container>
    </>
  );
}

export default Guide;

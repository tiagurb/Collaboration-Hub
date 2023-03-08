import React from "react";
import {
  Container,
  Avatar,
  Heading,
  Text,
  VStack,
  Stack,
  Link,
  IconButton,
  Divider,
  Flex,
  Box,
  Center,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

function JoaoPage() {
  const iconProps = {
    variant: "ghost",
    size: "lg",
    isRound: true,
  };

  const accounts = [
    {
      url: "https://github.com/MesquitaGit",
      label: "Github Account",
      type: "gray",
      icon: <FaGithub />,
    },
    {
      url: "https://www.linkedin.com/in/joaopsmesquita/",
      label: "LinkedIn Account",
      type: "linkedin",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <>
      <Container maxW="8xl" p={{ base: 5, md: 10 }} mx="auto">
        <Center>
          <VStack
            spacing={4}
            px={2}
            alignItems={{ base: "center", sm: "flex-start" }}
          >
            <Stack justifyContent="center" alignItems="center">
              <Avatar
                boxShadow="xl"
                size="xl"
                src="https://res.cloudinary.com/doti6zlah/image/upload/v1678292697/Jo%C3%A3o_Mesquita_Out_2021_-_18_cepkgg.jpg"
              />
              <Text fontSize="m">João Mesquita</Text>
            </Stack>
            <Heading
              textAlign={{ base: "center", sm: "left" }}
              margin="0 auto"
              width={{ base: "23rem", sm: "auto" }}
              fontSize={{ base: "2.5rem", sm: "3rem" }}
            >
              Full-Stack
              <br /> Developer based <br /> in Lisbon
            </Heading>
            <Text textAlign="center" w={"100vh"}>
              "Who says you can't have it all? This full-stack developer can
              write code, lift weights, rock out to some tunes, and binge-watch
              TV shows like a pro. With a passion for tech and a love for
              fitness, this coding wizard is ready to code, crunch, and crush
              some code again. Catch them coding in the morning, lifting weights
              at lunch, and jamming out to their favorite playlist while
              debugging code in the afternoon."
            </Text>
            <Divider />
            <Flex alignItems="center" justify="center" w="100%">
              <Box textAlign="center">
                {accounts.map((sc, index) => (
                  <IconButton
                    key={index}
                    as={Link}
                    isExternal
                    href={sc.url}
                    aria-label={sc.label}
                    colorScheme={sc.type}
                    rounded="full"
                    icon={sc.icon}
                    {...iconProps}
                  />
                ))}
              </Box>
            </Flex>
          </VStack>
        </Center>
      </Container>
    </>
  );
}

export default JoaoPage;

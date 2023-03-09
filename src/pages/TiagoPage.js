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

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

function TiagoPage() {
  const iconProps = {
    variant: "ghost",
    size: "lg",
    isRound: true,
  };

  const accounts = [
    {
      url: "https://github.com/tiagurb",
      label: "Github Account",
      type: "gray",
      icon: <FaGithub />,
    },
    {
      url: "https://www.linkedin.com/in/tiago-barata19/",
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
              <motion.div whileHover={{ y: -5, scale: 1.1 }}>
                <Box
                  boxShadow="xl"
                  _hover={{ boxShadow: "lg" }}
                  borderRadius="full"
                >
                  <Avatar
                    _groupHover={{ width: "5rem", height: "5rem" }}
                    boxShadow="xl"
                    size="xl"
                    src="https://res.cloudinary.com/doti6zlah/image/upload/v1678297604/1666008743372_h3x0ft.jpg"
                  />
                </Box>
              </motion.div>
              <Text fontSize="m" color={"gray.700"}>
                Tiago Barata
              </Text>
            </Stack>
            <Heading
              textAlign={{ base: "center", sm: "left" }}
              margin="0 auto"
              width={{ base: "23rem", sm: "auto" }}
              fontSize={{ base: "2.5rem", sm: "3rem" }}
              bgClip="text"
              bgGradient="linear(to-l, #2892C6, #C23156)"
            >
              Full-Stack
              <br /> Developer based <br /> in Almada
            </Heading>
            <Text textAlign="center" w={[200, 300, 400]} color={"gray.600"}>
              "This full-stack developer isn't just a coding machine - they're a
              dog whisperer, car restoration master, and tech guru all rolled
              into one. When they're not typing away at their keyboard, you can
              find them teaching their furry friends new tricks, getting greasy
              under the hood of a vintage car, or tinkering with the latest tech
              gadgets. They're a true jack-of-all-trades, with a knack for
              solving problems, whether it's debugging a line of code, training
              a stubborn pup, or restoring a classic car to its former glory."
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
      <Footer />
    </>
  );
}

export default TiagoPage;

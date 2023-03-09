import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api";
import { toast } from "react-toastify";
import { UserContext } from "../context/user.context";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authenticateUser } = useContext(UserContext);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    try {
      const response = await login({ email, password });
      localStorage.setItem("authToken", response.data);
      // Setting the loged user in the context
      authenticateUser();
      toast.success("You are logged in!");
      navigate("/dashboard");
    } catch (e) {
      toast.error("Error occurred", e);
    }
  }

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Login to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all your Pro Tasker
              <Link color={"blue.400"}> features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input id="email" type="email" onChange={handleEmailChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  id="password"
                  type="password"
                  onChange={handlePasswordChange}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Text>Don't have an account?</Text>
                  <Link to="/signup" color={"blue.400"}>
                    <Button
                      as={"a"}
                      fontSize={"md"}
                      color={"#3172CE"}
                      fontWeight={700}
                      variant={"link"}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  onClick={handleSubmitForm}
                  bg={"#5476A6"}
                  color={"white"}
                  _hover={{
                    bg: "#348ABC",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      <Footer />
    </>
  );
}

export default Login;

import React from "react";
import { Container, Text, Stack } from "@chakra-ui/react";

function Footer() {
  const Logo = () => {
    return (
      <img
        src="https://res.cloudinary.com/dq8v89bym/image/upload/v1677323940/zyro-image_1_i2yqtu.png"
        alt="pro tasker logo"
        width="48"
        height="68"
      />
    );
  };
  return (
    <Container
      as={Stack}
      maxW={"9xl"}
      py={4}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "center" }}
    >
      <Logo />
      <Text
        bgGradient="linear(to-l, #2892C6, #C23156)"
        bgClip="text"
        fontSize="1xl"
        fontWeight="extrabold"
      >
        © 2023 Pro Tasker. All rights reserved
      </Text>
      <Stack direction={"row"} spacing={5}></Stack>
    </Container>
  );
}

export default Footer;

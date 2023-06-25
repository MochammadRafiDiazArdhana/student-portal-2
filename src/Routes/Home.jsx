import React from "react";
import { Link } from "react-router-dom";
import { Heading, Box, Button, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box
      margin="20% 2% 20% 0"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      gap="10px"
    >
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        textAlign="center"
        gap="10px"
      >
        <Heading as="h1">Studi Independen Kampus Merdeka</Heading>
        <Text as="i">By Ruangguru</Text>
      </Box>
      <Box width="1px" backgroundColor="black"></Box>
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        textAlign="center"
        gap="5px"
      >
        <Text as="b" fontSize="25px">
          Welocome to Student Portal
        </Text>
        <Link to="/student">
          <Button data-testid="student-btn" colorScheme="linkedin">
            All Student
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;

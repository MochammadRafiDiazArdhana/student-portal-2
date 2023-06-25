import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Flex, Heading, Box, Link, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box
      as="nav"
      display="flex"
      justifyContent="space-between"
      padding="2rem 1.5rem"
      position="sticky"
      top="0"
      backgroundColor="blue.500"
      color="white"
    >
      <Heading as="h1" data-testid="home-page">
        <Link
          as={RouterLink}
          to="/"
          data-testid="student-btn"
          fontSize="28px"
          margin="0"
          display="flex"
          _hover={{ textDecoration: "none" }}
        >
          Student Portal
        </Link>
      </Heading>
      <Flex as="ul" listStyleType="none" margin="0 1rem">
        <Text as="li">
          <Link
            as={RouterLink}
            to="/student"
            data-testid="student-page"
            _hover={{ textDecoration: "none" }}
            margin="0 20px"
            display="flex"
          >
            All Student
          </Link>
        </Text>
        <Text as="li">
          <Link
            as={RouterLink}
            to="/add"
            data-testid="add-page"
            _hover={{ textDecoration: "none" }}
            margin="0 20px  "
            display="flex"
          >
            Add Student
          </Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default NavBar;

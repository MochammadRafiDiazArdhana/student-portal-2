import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      className="footer"
      backgroundColor="blue.500"
      fontFamily="Poppins, sans-serif"
      textAlign="center"
      p={25}
      color="white"
    >
      <p className="studentName">Mochammad Rafi Diaz Ardhana</p>-
      <p className="studentId">FE4245107</p>
    </Box>
  );
};

export default Footer;

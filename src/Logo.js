import { Img } from "@chakra-ui/react";
import React from "react";
import logo from "./images/fares.png";
const Logo = () => {
  return (
    <Img
      w="60px"
      borderRadius="50%"
      border="2px solid #52b788"
      src={logo}
      alt="Logo"
    />
  );
};

export default Logo;

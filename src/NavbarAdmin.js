import { ChevronDownIcon, SettingsIcon, InfoIcon } from "@chakra-ui/icons";
import { FaCamera, FaHome, FaUsers } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

const NavbarAdmin = () => {
  const hover = {
    color: "white",
  };
  return (
    <Box
      bgGradient="linear(to-l, #1ca183,#4acf86)"
      // bgColor={"#06d6a0"}
      color="black"
      p="1rem"
    >
      <Container maxWidth="90%">
        <Flex justifyContent="space-between">
          <Flex gap={2}>
            <Logo />
            <Heading fontWeight="bold" as="cite" fontSize={"40px"}>
              Fares
            </Heading>
          </Flex>
          <Flex alignItems="center" gap={6}>
            <Link
              _hover={{
                fontWeight: "bold",
                fontSize: "17px",
                color: "#fdfffc",
              }}
              d="flex"
              alignItems="center"
              gap={1}
              as="abbr"
              fontWeight="semibold"
            >
              <IoIosAddCircle />
              Crear Post
            </Link>
            <Link
              _hover={{
                fontWeight: "bold",
                fontSize: "17px",
                color: "#fdfffc",
              }}
              d="flex"
              alignItems="center"
              gap={1}
              as="abbr"
              fontWeight="semibold"
            >
              <FaHome />
              Home
            </Link>
            <Link
              _hover={{
                fontWeight: "bold",
                fontSize: "17px",
                color: "#fdfffc",
              }}
              d="flex"
              alignItems="center"
              gap={1}
              fontWeight="semibold"
              as="abbr"
            >
              <FaUsers />
              Nosotros
            </Link>
            <Menu closeOnBlur>
              <MenuButton
                p={"8px 16px"}
                transition="all 0.2s"
                borderRadius="md"
                bgColor="#000000"
                color="#2ec4b6"
                fontSize={"17px"}
                letterSpacing={0.5}
                fontWeight="bold"
                boxShadow="xl"
              >
                Perfil
                <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuGroup>
                  <MenuItem gap={2}>
                    <InfoIcon />
                    Mis datos
                  </MenuItem>
                  <MenuItem gap={2}>
                    <FaCamera />
                    Foto
                  </MenuItem>
                  <MenuItem gap={2}>
                    <SettingsIcon />
                    Modificar
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
export default NavbarAdmin;

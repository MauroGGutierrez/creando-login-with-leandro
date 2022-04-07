import { ChevronDownIcon, SettingsIcon, InfoIcon } from "@chakra-ui/icons";
import { FaCamera, FaHome } from "react-icons/fa";
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
    <Box bgColor={" rgb(25,135,84)"} color="black" p="1rem">
      <Container maxWidth="90%">
        <Flex justifyContent="space-between">
          <Flex gap={2}>
            <Logo />
            <Heading fontWeight="bold" as="cite">
              Fares
            </Heading>
          </Flex>
          <Flex alignItems="center" gap={6}>
            <Link _hover={hover} d="flex" alignItems="center" gap={1}>
              <IoIosAddCircle />
              Crear Post
            </Link>
            <Link _hover={hover} d="flex" alignItems="center" gap={1}>
              <FaHome />
              Home
            </Link>
            <Link _hover={hover} d="flex" alignItems="center" gap={1}>
              Nosotros
            </Link>
            <Menu closeOnBlur>
              <MenuButton
                p={"8px 10px"}
                transition="all 0.2s"
                borderRadius="md"
                bgColor="darkturquoise"
                letterSpacing={0.5}
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

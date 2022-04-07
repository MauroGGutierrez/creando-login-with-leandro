import { ChevronDownIcon } from "@chakra-ui/icons";
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
  return (
    <>
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
              <Link>Crear Post</Link>
              <Link>Home</Link>
              <Link>Nosotros</Link>
              <Box>
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
                      <MenuItem>Mis datos</MenuItem>
                      <MenuItem>Foto</MenuItem>
                      <MenuItem>Modificar</MenuItem>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default NavbarAdmin;

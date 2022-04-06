import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import logoblack from "./images/fares-bgBlack.jpeg";
const NavbarAdmin = () => {
  return (
    <>
      <Box bgColor="green" p="1rem">
        <Container maxWidth="90%">
          <Flex>
            <Box>
              <Logo logo={logoblack} />
            </Box>
            <Link>Home</Link>
            <Link>Crear Post</Link>
            <Link>Nosotros</Link>
            <Box>
              <Menu closeOnBlur>
                <MenuButton as={Button} color="white" bgColor="blue">
                  Perfil
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <MenuItem>Info. de usuario</MenuItem>
                    <MenuItem>Foto</MenuItem>
                    <MenuItem>Modificar</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default NavbarAdmin;

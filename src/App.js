import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function FormLogin() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={8}>
        <Box rounded={"lg"} bg={"#353535"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <Text
              fontSize="40px"
              color={"#52b788"}
              fontWeight="bold"
              as="cite"
              textAlign={"center"}
            >
              Logeate
            </Text>
            <FormControl id="email">
              <FormLabel color={"#F7FAFC"}>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={"#F7FAFC"}>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox color={"#F7FAFC"}>Recordarme</Checkbox>
                <Link color={"#52b788"}>Olvidaste tu contraseña?</Link>
              </Stack>
              <Button
                bg={"#52b788"}
                color={"white"}
                _hover={{
                  bg: "#2d6a4f",
                }}
              >
                Ingresar
              </Button>
              <Box>
                <Link
                  fontSize="16px"
                  color={"#52b788"}
                  as="em"
                  fontWeight="semibold"
                >
                  ¿ No tienes una cuenta ? Registrate aqui !
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

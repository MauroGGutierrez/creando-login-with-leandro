import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from "./TextField";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("invalid email").required("email required"),
        password: Yup.string()
          .required("Password required")
          .min(6, "Password is too short"),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={2} mx={"auto"} maxW={"lg"} px={8}>
            <Box bgColor="#0d0e0e" rounded={"lg"} boxShadow={"lg"} p={8}>
              <Stack spacing={2}>
                <Text
                  fontSize="40px"
                  color="#2daa55"
                  fontWeight="bold"
                  as="cite"
                  textAlign={"center"}
                >
                  Logeate
                </Text>
                <form onSubmit={formik.handleSubmit}>
                  <FormControl id="email">
                    <FormLabel m="0" color="#999999">
                      Email address
                    </FormLabel>
                    <Flex alignItems="baseline" gap={2}>
                      <TextField
                        name="email"
                        placeholder="enter email"
                        type="email"
                      />
                      <EmailIcon />
                    </Flex>
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel m="9px 0 0 0" color="#999999">
                      Password
                    </FormLabel>
                    <Flex alignItems="baseline" gap={2}>
                      <TextField
                        name="password"
                        type="password"
                        placeholder="enter password"
                      />
                      <LockIcon />
                    </Flex>
                  </FormControl>
                  <Box
                    m="13px 0"
                    _hover={{ color: "white" }}
                    color="#999999"
                    name="rememberMe"
                    as={Checkbox}
                    id="rememberMe"
                  >
                    Recordarme
                  </Box>
                  <Button
                    isFullWidth
                    type="submit"
                    bgColor="#2daa55"
                    _hover={{
                      bg: "#256146",
                    }}
                  >
                    Ingresar
                  </Button>
                </form>
                <Stack spacing={5}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Link color="#999999" _hover={{ color: "white" }}>
                      Olvidaste tu contraseña?
                    </Link>
                  </Stack>
                  <Box mt="2">
                    <Link
                      fontSize="16px"
                      color="#f8d614"
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
      )}
    </Formik>
  );
}
export default App;

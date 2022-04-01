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
import Logo from "./Logo";
function App() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Email invalido").required("Email requerido"),
        password: Yup.string()
          .required("Contraseña requerida")
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
            <Box bg={"#161a1d"} rounded={"lg"} p={8} boxShadow={"dark-lg"}>
              <Stack spacing={2}>
                <Flex alignItems="center" flexDirection="column-reverse">
                  <Text
                    fontSize="50px"
                    fontWeight="bold"
                    as="cite"
                    color={"#52b788"}
                    textShadow="3px 2px #22543D"
                  >
                    Logeate
                  </Text>
                  <Logo />
                </Flex>
                <form onSubmit={formik.handleSubmit}>
                  <FormControl id="email">
                    <FormLabel m="0" color="#999999">
                      Email address
                    </FormLabel>
                    <Flex alignItems="baseline" gap={4}>
                      <TextField
                        name="email"
                        placeholder="Ingrese su email"
                        type="email"
                        color="#FFFFFF"
                      />
                      <EmailIcon color={"#52b788"} />
                    </Flex>
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel m="9px 0 0 0" color="#999999">
                      Password
                    </FormLabel>
                    <Flex alignItems="baseline" gap={4}>
                      <TextField
                        name="password"
                        type="password"
                        placeholder="Ingrese su contraseña"
                        color="#FFFFFF"
                      />
                      <LockIcon color={"#52b788"} />
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
                      boxShadow: "0 0 6px green",
                      bgColor: "#24c924",
                    }}
                    fontSize="20px"
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
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Stack>
                  <Box mt="2">
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
      )}
    </Formik>
  );
}
export default App;

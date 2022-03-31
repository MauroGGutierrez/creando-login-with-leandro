import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Stack,
  Link,
  Text,
} from "@chakra-ui/react";

export default function App() {
  return (
    <Box>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: false,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Flex minH={"100vh"} align={"center"} justify={"center"}>
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
                  <form onSubmit={handleSubmit}>
                    <FormControl id="email">
                      <FormLabel color={"#F7FAFC"}>Email address</FormLabel>
                      <Field
                        as={Input}
                        type="email"
                        name="email"
                        // value={formik.values.email}
                        // onChange={formik.handleChange}
                      />
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                      id="password"
                    >
                      <FormLabel color={"#F7FAFC"}>Password</FormLabel>
                      <Field
                        as={Input}
                        type="password"
                        name="password"
                        // validate={(value) => {
                        //   let error;

                        //   if (value.length < 5) {
                        //     error =
                        //       "Password must contain at least 6 characters";
                        //   }

                        //   return error;
                        // }}
                      />
                      {/* <FormErrorMessage>{errors.password}</FormErrorMessage> */}
                    </FormControl>
                    <Field
                      color={"#F7FAFC"}
                      name="rememberMe"
                      as={Checkbox}
                      id="rememberMe"
                      // onChange={formik.handleChange}
                      // isChecked={formik.values.rememberMe}
                    >
                      Recordarme
                    </Field>
                    <Button
                      isFullWidth
                      type="submit"
                      bg={"#52b788"}
                      color={"white"}
                      _hover={{
                        bg: "#2d6a4f",
                      }}
                    >
                      Ingresar
                    </Button>
                  </form>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Link color={"#52b788"}>Olvidaste tu contraseña?</Link>
                    </Stack>
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
        )}
      </Formik>
    </Box>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import FormLogin from "./FormLogin";
ReactDOM.render(
  <ChakraProvider>
    {/* <App /> */}
    <FormLogin />
  </ChakraProvider>,
  document.getElementById("root")
);

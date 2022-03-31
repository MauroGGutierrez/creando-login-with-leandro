import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import Form from "./Form";
// import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Form />
      {/* <App /> */}
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import NavbarAdmin from "./NavbarAdmin";
import Form from "./Form";
import Register from "./Register";
// import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Register />
      {/* <NavbarAdmin /> */}
      {/* <Form /> */}
      {/* <App /> */}
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

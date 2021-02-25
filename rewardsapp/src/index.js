import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./theme";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ChakraProvider resetCSS theme={theme}>
        <App />
      </ChakraProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

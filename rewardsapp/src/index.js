import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from "./theme";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <UserProvider>
        <Router>
          <App />
        </Router>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

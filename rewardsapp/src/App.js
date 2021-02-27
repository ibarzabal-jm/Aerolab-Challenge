import AppRouter from "./routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

import { Stack } from "@chakra-ui/react";

import { UserProvider } from "./context/UserContext";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <UserProvider>
      <Stack
        maxW="1440px"
        width="100%"
        margin="auto"
        bg="#f9f9f9"
        m={{ base: 0, xl: 4 }}
        spacing={0}
        minH="100vh"
      >
        <Router>
          <Navbar />
          <AppRouter />
          <Footer />
        </Router>
      </Stack>
    </UserProvider>
  );
};

export default App;

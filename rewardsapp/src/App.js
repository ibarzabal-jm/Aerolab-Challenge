import AppRouter from "./routers/AppRouter";

import { Stack } from "@chakra-ui/react";

import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <Stack
      maxW="1440px"
      width="100%"
      margin="auto"
      bg="#f9f9f9"
      m={{ base: 0, xl: 4 }}
      spacing={0}
      minH="100vh"
    >
      <Navbar />
      <AppRouter />
      <Footer />
    </Stack>
  );
};

export default App;

import AppRouter from "./routers/AppRouter";
import { Stack, Image, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { user } = useContext(UserContext);

  return user.name === "" ? (
    <Stack
      bg="primary"
      justify="center"
      align="center"
      height="100vh"
      width="100vw"
    >
      <Image src="../assets/logo.svg" w={20} h="{20" />
      <Heading textAlign="center">Loading...</Heading>
    </Stack>
  ) : (
    <Stack
      maxW="1440px"
      width="100%"
      margin="auto"
      bg="#f9f9f9"
      m={{ base: 0, xl: 4 }}
      spacing={0}
    >
      <AppRouter />
    </Stack>
  );
};

export default App;

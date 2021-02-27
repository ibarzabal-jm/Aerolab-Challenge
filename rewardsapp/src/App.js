import AppRouter from "./routers/AppRouter";
import { Stack } from "@chakra-ui/react";
import { UserProvider } from "./context/UserContext";

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
        <AppRouter />
      </Stack>
    </UserProvider>
  );
};

export default App;

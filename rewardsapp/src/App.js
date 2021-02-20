import AppRouter from "./routers/AppRouter";
import { Stack } from "@chakra-ui/react";

const App = () => {
  return (
    <Stack
      maxW="1440px"
      width="100%"
      margin="auto"
      bg="#f9f9f9"
      marginY={{ base: 0, xl: 4 }}
      spacing={0}
    >
      <AppRouter />
    </Stack>
  );
};

export default App;

import React from "react";
import { Button, Stack, Image } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Stack
      as="nav"
      isInline
      alignItems="center"
      height="80px"
      justifyContent="space-between"
      bg="white"
      zIndex={200}
    >
      <Image src="../assets/aerolab-logo.svg" ml={8} />

      <Stack isInline mr={8}>
        <Button size="md" variant="link">
          Usuario
        </Button>
        <Button size="md" rounded={999}>
          coins
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;

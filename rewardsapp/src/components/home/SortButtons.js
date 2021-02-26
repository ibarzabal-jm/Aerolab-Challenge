import React from "react";
import { Stack, Text, Button, useBreakpointValue } from "@chakra-ui/react";

const SortButtons = ({ sortSelected, handleChange }) => {
  const text = useBreakpointValue({ base: "", md: "Price" });
  return (
    <Stack isInline>
      <Text display={{ base: "none", md: "block" }} alignSelf="center">
        Sort By:
      </Text>

      <Button
        bg={sortSelected === "recent" ? "primary" : "#ededed"}
        color={sortSelected === "recent" ? "white" : "#a3a3a3"}
        rounded={999}
        onClick={() => handleChange("recent")}
      >
        Most Recent
      </Button>
      <Button
        bg={sortSelected === "lowest" ? "primary" : "#ededed"}
        color={sortSelected === "lowest" ? "white" : "#a3a3a3"}
        rounded={999}
        onClick={() => handleChange("lowest")}
      >
        Lowest {text}
      </Button>
      <Button
        bg={sortSelected === "highest" ? "primary" : "#ededed"}
        color={sortSelected === "highest" ? "white" : "#a3a3a3"}
        rounded={999}
        onClick={() => handleChange("highest")}
      >
        Highest {text}
      </Button>
    </Stack>
  );
};

export default SortButtons;

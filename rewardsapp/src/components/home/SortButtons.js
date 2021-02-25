import React from "react";
import { Stack, Text, Button } from "@chakra-ui/react";

const SortButtons = ({ sortSelected, handleChange }) => {
  return (
    <Stack isInline>
      <Text display={{ base: "none", md: "block" }} alignSelf="center">
        Sort By:
      </Text>

      <Button
        bg={sortSelected === "recent" ? "primary" : "#ededed"}
        color={sortSelected === "recent" ? "white" : "#a3a3a3"}
        rounded={999}
        _hover={{ backgroundColor: "secondary", color: "white" }}
        onClick={() => handleChange("recent")}
      >
        Most Recent
      </Button>
      <Button
        bg={sortSelected === "lowest" ? "primary" : "#ededed"}
        color={sortSelected === "lowest" ? "white" : "#a3a3a3"}
        rounded={999}
        _hover={{ backgroundColor: "secondary", color: "white" }}
        onClick={() => handleChange("lowest")}
      >
        Lowest Price
      </Button>
      <Button
        bg={sortSelected === "highest" ? "primary" : "#ededed"}
        color={sortSelected === "highest" ? "white" : "#a3a3a3"}
        rounded={999}
        _hover={{ backgroundColor: "secondary", color: "white" }}
        onClick={() => handleChange("highest")}
      >
        Highest Price
      </Button>
    </Stack>
  );
};

export default SortButtons;

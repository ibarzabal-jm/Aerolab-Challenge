import React from "react";
import { Stack, Text, Box, useBreakpointValue } from "@chakra-ui/react";

const SortButtons = ({ sortSelected, handleChange }) => {
  const filter = [
    { value: "recent", fullText: "Most Recent", mobile: "Recent" },
    { value: "lowest", fullText: "Lowest Price", mobile: "Lowest" },
    { value: "highest", fullText: "Highest Price", mobile: "Highest" },
  ];

  const breakPoint = useBreakpointValue({ base: "base", sm: "small" });

  return (
    <Stack alignItems="center" direction={{ base: "column", sm: "row" }}>
      <Text color="a3a3a3">Sort by:</Text>
      <Stack direction="row" spacing={2}>
        {filter.map((filter) => (
          <Box
            key={filter.value}
            as="button"
            bg={filter.value === sortSelected ? "primary" : "#ededed"}
            color={filter.value === sortSelected ? "white" : "#a3a3a3"}
            cursor="pointer"
            paddingY={1}
            paddingX={4}
            rounded={999}
            onClick={() => handleChange(filter.value)}
          >
            <Text>
              {breakPoint === "base" ? filter.mobile : filter.fullText}
            </Text>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default SortButtons;

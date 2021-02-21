import { Stack } from "@chakra-ui/react";
import React from "react";

const ProductHover = () => {
  return (
    <Stack
      position="absolute"
      top="0"
      left="0"
      bottom="0"
      alignItems="center"
      justifyContent="center"
      width="100%"
      zIndex="200"
      opacity=".8"
      bgGradient="linear(to-b, #0ad4fa 0%, #25bbf1 100%)"
    ></Stack>
  );
};

export default ProductHover;

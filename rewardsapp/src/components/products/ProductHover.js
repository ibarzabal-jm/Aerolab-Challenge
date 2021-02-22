import React from "react";
import { Stack, Image, Button, Text } from "@chakra-ui/react";

const ProductHover = ({ id, cost }) => {
  return (
    <Stack
      position="absolute"
      top="0"
      left="0"
      width="100%"
      spacing={4}
      padding={2.5}
      zIndex="200"
      height="100%"
      opacity="0"
      justifyContent="center"
      bgGradient="linear(to-b, #0ad4faCC 0%, #25bbf1CC 100%)"
      transitionDuration="0.4s"
      transitionProperty="transform"
      _hover={{
        opacity: "1",
      }}
    >
      <Stack isInline justifyContent="center" alignItems="center">
        <Text color="white">{cost}</Text>
        <Image src="../assets/icons/coin.svg" />
      </Stack>
      <Button>Redeem now</Button>
    </Stack>
  );
};

export default ProductHover;

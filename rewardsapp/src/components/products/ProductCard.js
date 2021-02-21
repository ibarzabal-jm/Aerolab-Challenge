import React, { useState } from "react";
import { Stack, Text, Image, Divider } from "@chakra-ui/react";
import ProductHover from "./ProductHover";

const ProductCard = ({ product }) => {
  const { id, name, cost, category, img } = product;
  const [hover, setHover] = useState(false);
  return (
    <Stack
      bg="white"
      boxShadow="2px 2px 4px 0 rgba(0,0,0,0.1)"
      cursor="pointer"
      height="276px"
      padding={2.5}
      rounded={4}
      spacing={4}
      width="276px"
      transitionDuration="0.4s"
      transitionProperty="transform"
      _hover={{
        transform: "translateY(-0.7em)",
        borderColor: "1px red",
      }}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      {hover && <ProductHover productCost={cost} productId={id} />}
      <Stack spacing={0} alignItems="flex-end">
        <Image
          src="../assets/icons/buy-blue.svg"
          marginBottom={-10}
          maxH="42px"
          maxW="42px"
          zIndex={30}
        />
        <Image src={img.hdUrl} alt={name} />
        <Divider />
      </Stack>
      <Stack textAlign="start" spacing={0}>
        <Text color="#a3a3a3">{category}</Text>
        <Text color="#616161">{name}</Text>
      </Stack>
    </Stack>
  );
};

export default ProductCard;

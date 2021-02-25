import React, { useState, useContext } from "react";
import { Stack, Text, Image, Divider, TagLabel, Tag } from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";
import ProductHover from "./ProductHover";

const ProductCard = ({ product }) => {
  const {
    user: { points },
  } = useContext(UserContext);

  const { _id, name, cost, category, img } = product;
  const [hover, setHover] = useState(false);
  return (
    <Stack
      bg="white"
      boxShadow="2px 2px 4px 0 rgba(0,0,0,0.1)"
      height="276px"
      padding={2.5}
      position="relative"
      rounded={4}
      spacing={0}
      width="276px"
      transitionDuration="0.4s"
      transitionProperty="transform"
      _hover={{
        transform: "translateY(-0.7em)",
      }}
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      {points >= cost && <ProductHover id={_id} cost={cost} />}
      <Stack spacing={4}>
        <Stack spacing={0} alignItems="flex-end">
          {points >= cost ? (
            <Image
              src="../assets/icons/buy-blue.svg"
              marginBottom={-10}
              maxH="42px"
              maxW="42px"
              opacity={hover ? 0 : 1}
              zIndex={100}
            />
          ) : (
            <Tag bg="#616161CC" marginBottom={-10} rounded={999} zIndex={100}>
              <TagLabel>You need {cost - points} </TagLabel>
              <Image
                src="../assets/icons/coin.svg"
                ml={1}
                mt={1}
                maxW="32px"
                maxH="32px"
              />
            </Tag>
          )}
          <Image src={img.hdUrl} alt={name} />
          <Divider />
        </Stack>
        <Stack textAlign="start" spacing={0}>
          <Text color="#a3a3a3">{category}</Text>
          <Text color="#616161">{name}</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductCard;

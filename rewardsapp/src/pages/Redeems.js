import React, { useContext } from "react";
import {
  Stack,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { UserContext } from "../context/UserContext";

const Redeems = () => {
  const { user } = useContext(UserContext);

  return (
    <Stack bg="#f9f9f9" minH="100vh" spacing={3}>
      <Flex
        background="url(../assets/header.png) center right"
        backgroundSize="cover"
        filter="invert(20%)"
        minHeight="200px"
        width="100%"
      >
        <Heading color="white" fontSize="64px" alignSelf="flex-end" padding={6}>
          History
        </Heading>
      </Flex>
      <Stack padding={2}>
        <SimpleGrid columns={{ base: 2, xl: 3 }} gap={2}>
          {user.redeemHistory
            ?.slice(0)
            .reverse()
            .map((product) => {
              const date = new Date(product.createDate);
              return (
                <Stack
                  border="2px"
                  borderColor="primary"
                  isInline
                  alignItems="center"
                  key={product.createDate}
                >
                  <Stack>
                    <Image alt={product.name} src={product.img.hdUrl}></Image>
                  </Stack>
                  <Stack w="100%" justify="center" spacing={0}>
                    <Text color="#a3a3a3" fontWeight="bold">
                      {product.category}
                    </Text>
                    <Text fontWeight="bold">{product.name}</Text>
                    <Text>Date: {date.toLocaleDateString("es-ar")}</Text>
                  </Stack>
                  <Stack w="100%" justify="center" spacing={0} isInline>
                    <Text align="center">{product.cost}</Text>
                    <Image src="../assets/icons/coin.svg" w={8} h={8} />
                  </Stack>
                </Stack>
              );
            })}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default Redeems;

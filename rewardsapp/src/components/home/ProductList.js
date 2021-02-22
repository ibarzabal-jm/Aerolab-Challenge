import React, { useState, useEffect } from "react";
import { Button, Divider, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { api } from "../../api/api";
import ProductCard from "../products/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.getProducts().then((productos) => setProducts(productos));
  }, []);
  return (
    <Stack padding={8} spacing={10} textAlign="center">
      <Stack isInline>
        <Text alignSelf="center"> 16 of 32 products</Text>
        <Stack isInline>
          <Text alignSelf="center"> Sort By:</Text>

          <Button colorScheme="cyan">Most Recent</Button>
          <Button colorScheme="cyan">Lower Price</Button>
          <Button colorScheme="cyan">Highest Price</Button>
        </Stack>
      </Stack>
      <Divider />
      <Stack>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
          gap={8}
          alignSelf="center"
        >
          {products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
};

export default ProductList;

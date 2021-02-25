import React, { useState, useEffect } from "react";
import { Divider, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { api } from "../../api/api";
import { getSort } from "../../helpers/getSort";

import SortButtons from "./SortButtons";
import ProductCard from "../products/ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortSelected, setSortSelected] = useState("recent");

  useEffect(() => {
    api
      .getProducts()
      .then((productos) => setProducts(getSort(productos, sortSelected)));
  }, []);

  const handleSortChange = (sortMethod) => {
    setSortSelected(sortMethod);
    setProducts(getSort(products, sortMethod));
  };

  return (
    <Stack padding={8} spacing={10} textAlign="center">
      <Stack isInline>
        <Text alignSelf="center"> 16 of 32 products</Text>
        <SortButtons
          sortSelected={sortSelected}
          handleChange={handleSortChange}
        />
      </Stack>
      <Divider />

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
        gap={8}
        alignSelf="center"
      >
        {products?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </SimpleGrid>

      <Divider />
      <Stack isInline justify="space-between">
        <Text alignSelf="center"> 16 of 32 products</Text>
      </Stack>
    </Stack>
  );
};

export default ProductList;

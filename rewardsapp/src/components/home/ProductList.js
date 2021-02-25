import React, { useState, useEffect } from "react";
import { Divider, SimpleGrid, Stack, Text, Image } from "@chakra-ui/react";
import { api } from "../../api/api";
import { getSort } from "../../helpers/getSort";
import { motion } from "framer-motion";

import SortButtons from "./SortButtons";
import ProductCard from "../products/ProductCard";

const PAGE_SIZE = 16;
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [sortSelected, setSortSelected] = useState("recent");

  useEffect(() => {
    if (products.length === 0) {
      api
        .getProducts()
        .then((productos) => setProducts(getSort(productos, sortSelected)));
    }
  }, [sortSelected, products.length]);

  const handleSortChange = (sortMethod) => {
    setPage(1);
    setSortSelected(sortMethod);
    setProducts(getSort(products, sortMethod));
  };

  return (
    <Stack padding={8} spacing={3} textAlign="center">
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Text alignSelf="center">
            {page * PAGE_SIZE} of {products.length} products
          </Text>
          <Divider
            orientation="vertical"
            color="black"
            colorScheme="gray"
            size="5px"
            variant="solid"
          />
          <SortButtons
            sortSelected={sortSelected}
            handleChange={handleSortChange}
          />
        </Stack>
        <Stack isInline>
          <Image
            cursor="pointer"
            src="../assets/icons/arrow-right.svg"
            onClick={() => setPage((p) => p + 1)}
            display={PAGE_SIZE === products.length / page && "none"}
          />
          <Image
            cursor="pointer"
            src="../assets/icons/arrow-left.svg"
            onClick={() => setPage((p) => p - 1)}
            display={page === 1 && "none"}
          />
        </Stack>
      </Stack>
      <Divider variant="solid" />

      <Stack>
        <SimpleGrid
          marginTop={4}
          columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
          gap={8}
          alignSelf="center"
        >
          {products
            ?.slice((page - 1) * PAGE_SIZE, PAGE_SIZE * page)
            .map((product, index) => (
              <motion.div
                animate="visible"
                key={product._id}
                custom={index}
                initial="hidden"
                variants={{
                  hidden: { opacity: 0, y: 150 },
                  visible: (index) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.09,
                    },
                  }),
                }}
              >
                <ProductCard product={product} key={product._id} />
              </motion.div>
            ))}
        </SimpleGrid>
      </Stack>

      <Divider variant="solid" />
      <Stack isInline justify="space-between">
        <Text alignSelf="center">
          {page * PAGE_SIZE} of {products.length} products
        </Text>

        <Stack isInline>
          <Image
            cursor="pointer"
            src="../assets/icons/arrow-right.svg"
            onClick={() => setPage((p) => p + 1)}
            display={PAGE_SIZE === products.length / page && "none"}
          />
          <Image
            cursor="pointer"
            src="../assets/icons/arrow-left.svg"
            onClick={() => setPage((p) => p - 1)}
            display={page === 1 && "none"}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductList;

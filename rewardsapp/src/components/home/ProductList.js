import React, { useState, useEffect } from "react";
import { Divider, Grid, Stack, Text, Image } from "@chakra-ui/react";
import { getSort } from "../../helpers/getSort";
import { motion } from "framer-motion";

import SortButtons from "./SortButtons";
import ProductCard from "../products/ProductCard";

const PAGE_SIZE = 16;
const ProductList = ({ products }) => {
  const [page, setPage] = useState(1);
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortSelected, setSortSelected] = useState("recent");

  useEffect(() => {
    setPage(1);
    setSortedProducts(getSort(products, sortSelected));
  }, [sortSelected, products]);

  const handleSortChange = (sortMethod) => {
    setSortSelected(sortMethod);
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

      <Stack justifyContent="center">
        <Grid
          gap={4}
          templateColumns="repeat(auto-fill, minmax(256px, 1fr))"
          width="100%"
        >
          {sortedProducts
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
        </Grid>
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

import React, { useState, useEffect } from "react";
import { Divider, Grid, Stack, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

import SortButtons from "./SortButtons";
import ProductCard from "../products/ProductCard";

import { getSort } from "../../helpers/getSort";

const ProductList = ({ products, productsPerPage }) => {
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
    <Stack padding={4} spacing={3}>
      <Stack
        alignItems="center"
        align="center"
        as="nav"
        justify="space-between"
        direction={{ base: "column", sm: "row" }}
      >
        <Stack isInline align="center">
          <Text color="gray.700" fontWeight="semibold">
            {page * productsPerPage} of {products.length} products
          </Text>
          <Divider orientation="vertical" />
          <SortButtons
            sortSelected={sortSelected}
            handleChange={handleSortChange}
          />
        </Stack>

        <Stack display={{ base: "none", sm: "flex" }}>
          {page !== 1 && (
            <Image
              cursor="pointer"
              src="../assets/icons/arrow-left.svg"
              onClick={() => setPage((p) => p - 1)}
            />
          )}
          {productsPerPage !== products.length / page && (
            <Image
              cursor="pointer"
              src="../assets/icons/arrow-right.svg"
              onClick={() => setPage((p) => p + 1)}
            />
          )}
        </Stack>
      </Stack>

      <Divider variant="solid" />

      <Grid
        gap={3}
        templateColumns="repeat(auto-fill, minmax(276px, 1fr))"
        width="100%"
        justifyItems="center"
      >
        {sortedProducts
          ?.slice((page - 1) * productsPerPage, productsPerPage * page)
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
                    delay: index * 0.06,
                  },
                }),
              }}
            >
              <ProductCard product={product} key={product._id} />
            </motion.div>
          ))}
      </Grid>

      <Divider variant="solid" />
      <Stack isInline align="center" justify="space-between">
        <Text color="gray.700" fontWeight="semibold">
          {page * productsPerPage} of {products.length} products
        </Text>

        <Stack isInline>
          {page !== 1 && (
            <Image
              cursor="pointer"
              src="../assets/icons/arrow-left.svg"
              onClick={() => setPage((p) => p - 1)}
            />
          )}
          {productsPerPage !== products.length / page && (
            <Image
              cursor="pointer"
              src="../assets/icons/arrow-right.svg"
              onClick={() => setPage((p) => p + 1)}
            />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductList;

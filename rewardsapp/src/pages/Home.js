import React, { useState, useEffect } from "react";
import {  Stack } from "@chakra-ui/react";
import Header from "../components/home/Header";
import ProductList from "../components/home/ProductList";
import ProductListSkeleton from "../components/home/ProductListSkeleton";
import { api } from "../api/api";

const Home = () => {
  const PRODUCT_PER_PAGE = 16;
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <Stack bg="#f9f9f9">
      <Header />
      {loading ? (
        <ProductListSkeleton productsPerPage={PRODUCT_PER_PAGE} />
      ) : (
        <ProductList products={products} productsPerPage={PRODUCT_PER_PAGE} />
      )}
    </Stack>
  );
};

export default Home;

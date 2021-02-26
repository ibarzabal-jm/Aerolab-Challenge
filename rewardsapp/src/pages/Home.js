import React, { useState, useEffect } from "react";
import { CircularProgress, Stack } from "@chakra-ui/react";
import Header from "../components/home/Header";
import ProductList from "../components/home/ProductList";
import { api } from "../api/api";

const Home = () => {
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
        <Stack alignItems="center" justifyContent="center" paddingY={12}>
          <CircularProgress color="secondary" />
        </Stack>
      ) : (
        <ProductList products={products} />
      )}
    </Stack>
  );
};

export default Home;

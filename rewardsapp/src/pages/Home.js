import React from "react";
import { Stack } from "@chakra-ui/react";
import Header from "../components/home/Header";
import ProductList from "../components/home/ProductList";


const Home = () => {
  return (
    <Stack bg="#f9f9f9">
      <Header />
      <ProductList />
    </Stack>
  );
};

export default Home;

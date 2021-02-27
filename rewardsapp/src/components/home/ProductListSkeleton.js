import React from "react";
import { Stack, Grid, Skeleton, Divider } from "@chakra-ui/react";

const ProductListSkeleton = ({ productsPerPage }) => {
  return (
    <Stack padding={8} spacing={3} textAlign="center">
      <Stack align="center" padding={2}></Stack>
      <Divider />
      <Grid
        gap={3}
        templateColumns="repeat(auto-fill, minmax(276px, 1fr))"
        width="100%"
        justifyItems="center"
      >
        {[...Array(productsPerPage)].map((skelet, i) => (
          <Skeleton key={i} height="276px" width="276px"></Skeleton>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProductListSkeleton;

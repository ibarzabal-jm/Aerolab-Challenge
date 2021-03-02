import React from "react";
import {
  Stack,
  Grid,
  Skeleton,
  Divider,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

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
          <motion.div
            animate="visible"
            key={i}
            layout
            custom={i}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: (index) => ({
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.06,
                },
              }),
            }}
          >
            <Stack
              bg="white"
              boxShadow="2px 2px 4px 0 rgba(0,0,0,0.1)"
              padding={2.5}
              height="276px"
              width="276px"
            >
              <SkeletonCircle alignSelf="flex-end" />
              <Skeleton>
                <Stack w="240px" h="160px"></Stack>
              </Skeleton>
              <Divider />
              <SkeletonText mt="4" noOfLines={2} spacing="4" w={28} />
            </Stack>
          </motion.div>
        ))}
      </Grid>
    </Stack>
  );
};

export default ProductListSkeleton;

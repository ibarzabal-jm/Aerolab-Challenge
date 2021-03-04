import React from "react";
import { Stack, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const transitionValues = {
  duration: 0.3,
  yoyo: Infinity,
  ease: "easeOut",
};

const LoadingPage = () => {
  return (
    <Stack
      bg="primary"
      justify="center"
      align="center"
      height="100vh"
      width="100vw"
    >
      <motion.image
        transition={{
          y: transitionValues,
          width: transitionValues,
          height: transitionValues,
        }}
        animate={{
          y: ["0%", "-100%"],
        }}
      >
        <Image src="../assets/logo.svg" w={20} />
      </motion.image>
      <Heading textAlign="center">Loading...</Heading>
    </Stack>
  );
};

export default LoadingPage;

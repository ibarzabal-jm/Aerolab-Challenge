import React, { useContext } from "react";
import { Stack, Image, Button, Text } from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";
import { api } from "../../api/api";
import Swal from "sweetalert2";

const ProductHover = ({ id, cost }) => {
  const { setUser } = useContext(UserContext);

  const redeemProduct = () => {
    api.redeem(id).then(({ message, error }) => {
      if (message) {
        api.getUser().then((user) => setUser(user));
        Swal.fire({
          icon: "success",
          title: "Product Buy !",
          text: message,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Crap...",
          text: error,
          footer: "Report with me",
        });
      }
    });
  };

  return (
    <Stack
      position="absolute"
      top="0"
      left="0"
      bgGradient="linear(to-b, #0ad4faCC 0%, #25bbf1CC 100%)"
      height="100%"
      opacity={0}
      padding={2.5}
      spacing={4}
      width="100%"
      zIndex={200}
      transitionDuration="0.4s"
      transitionProperty="transform"
      _hover={{
        opacity: "1",
      }}
    >
      <Image
        src="../assets/icons/buy-white.svg"
        maxH="42px"
        maxW="42px"
        alignSelf="flex-end"
      />

      <Stack isInline justify="center" align="center">
        <Text
          fontSize="36px"
          letterSpacing="-0.08px"
          textAlign="center"
          color="white"
        >
          {cost}
        </Text>
        <Stack>
          <Image
            boxSize="36px"
            borderRadius="100%"
            marginTop={2.5}
            src="../assets/icons/coin.svg"
          />
        </Stack>
      </Stack>
      <Button rounded={999} backgroundColor="white" onClick={redeemProduct}>
        Redeem now
      </Button>
    </Stack>
  );
};

export default ProductHover;

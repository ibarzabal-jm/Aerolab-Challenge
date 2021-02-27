import React from "react";
import { Link } from "react-router-dom";

import { Stack, Image, Text, Icon, Button } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

import ModalCoins from "./ModalCoins";
import { useUser } from "../../hooks/useUser";
import { usePoints } from "../../hooks/usePoints";

const Navbar = () => {
  const { name } = useUser();
  const { points, addPoints, loading } = usePoints();

  const handleAddCoins = (point) => {
    addPoints(point);
  };

  return (
    <Stack
      as="nav"
      isInline
      alignItems="center"
      height="80px"
      justifyContent="space-between"
      bg="white"
    >
      <Link to="/home">
        <Image src="../assets/logo.svg" ml={4} />
      </Link>
      <Stack isInline align="center" justify="center" mr={4}>
        <Text
          fontSize="xl"
          color="#616161"
          letterSpacing="-0.15px"
          lineHeight="48px"
        >
          {name}
        </Text>
        <Button variant="link" as={Link} to="/redeems">
          <Icon as={RepeatClockIcon} color="secondary" height={10} width={10} />
        </Button>
        <ModalCoins
          handleAddCoins={handleAddCoins}
          loading={loading}
          userPoints={points}
        />
      </Stack>
    </Stack>
  );
};

export default Navbar;

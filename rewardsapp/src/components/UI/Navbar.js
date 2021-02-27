import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Stack, Image, Text, Icon, Button } from "@chakra-ui/react";
import { RepeatClockIcon } from "@chakra-ui/icons";

import { api } from "../../api/api";
import { UserContext } from "../../context/UserContext";

import ModalCoins from "./ModalCoins";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleAddCoins = (point) => {
    if (typeof point === "number") {
      api
        .addPoints(point)
        .then((res) => setUser({ ...user, points: res["New Points"] }));
    }
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
          {user.name}
        </Text>
        <Button variant="link" as={Link} to="/redeems">
          <Icon as={RepeatClockIcon} color="secondary" height={10} width={10} />
        </Button>
        <ModalCoins handleAddCoins={handleAddCoins} userPoints={user.points} />
      </Stack>
    </Stack>
  );
};

export default Navbar;

import { Stack, Heading, Image } from "@chakra-ui/react";
import React, { useState, createContext, useEffect } from "react";
import { api } from "../api/api";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    name: "",
    id: "",
    points: 0,
    redeemHistory: [],
    createDate: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getUser().then((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  if (!user || loading) {
    return (
      <Stack
        bg="primary"
        justify="center"
        align="center"
        height="100vh"
        width="100vw"
      >
        <Image src="../assets/logo.svg" w={20} h="{20" />
        <Heading textAlign="center">Loading...</Heading>
      </Stack>
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

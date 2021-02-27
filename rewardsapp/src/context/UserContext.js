import { Stack, Heading, Image } from "@chakra-ui/react";
import React, { useState, createContext, useEffect } from "react";
import { api } from "../api/api";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [pointsLoading, setPointsLoading] = useState(true);

  const handleAddPoints = async (pointsToAdd) => {
    setPointsLoading(true);
    return api.addPoints(pointsToAdd).then((res) => {
      setUser({ ...user, points: res["New Points"] });
      setPointsLoading(false);
    });
  };

  const handleRedeem = async (id, cost) => {
    setPointsLoading(true);
    return api.redeem(id).then(() => {
      setUser({ ...user, points: user.points - cost });
      setPointsLoading(false);
    });
  };

  useEffect(() => {
    api.getUser().then((user) => {
      setUser(user);
      setPointsLoading(false);
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
    <UserContext.Provider
      value={{
        user,
        setUser,
        addPoints: handleAddPoints,
        redeem: handleRedeem,
        pointsLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

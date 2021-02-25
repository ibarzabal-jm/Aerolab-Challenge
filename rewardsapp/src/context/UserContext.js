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

  useEffect(() => {
    api.getUser().then((user) => setUser(user));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

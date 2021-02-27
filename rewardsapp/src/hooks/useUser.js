import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  const { user } = useContext(UserContext);

  return user;
}

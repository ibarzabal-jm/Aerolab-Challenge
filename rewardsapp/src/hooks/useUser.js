import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function useUser() {
  const {
    state: { user },
  } = useContext(UserContext);

  return user;
}

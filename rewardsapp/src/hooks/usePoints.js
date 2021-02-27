import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function usePoints() {
  const { user, addPoints, redeem, pointsLoading } = useContext(UserContext);

  return { points: user.points, addPoints, redeem, loading: pointsLoading };
}

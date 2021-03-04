import React, { useState, createContext, useEffect } from "react";
import { api } from "../api/api";
import Swal from "sweetalert2";
import LoadingPage from "../components/UI/LoadingPage";

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

  const handleRedeem = async (id) => {
    setPointsLoading(true);
    return api.redeem(id).then(({ message, error }) => {
      if (message) {
        api
          .getUser()
          .then((user) => setUser(user))
          .then(() => {
            setPointsLoading(false);
            Swal.fire({
              icon: "success",
              title: "Product Buy!",
              text: "Wiiiii",
            });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Crap...",
          text: "You can't redeem now, report with admin",
          footer: error,
        });
        setPointsLoading(false);
      }
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
    return <LoadingPage />;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        addPoints: handleAddPoints,
        redeem: handleRedeem,
        pointsLoading,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

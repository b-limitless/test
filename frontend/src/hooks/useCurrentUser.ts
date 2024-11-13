import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "utils/request";

export default function useCurrentUser() {
  const navigate = useNavigate();

  const navigateTo = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  const currentUser = useCallback(async () => {
    try {
      // Submit the form to service
      await request({
        url: "http://localhost:3000/users/currentUser",
        method: "post",
        navigations: navigateTo,
      });
    } catch (err) {
      console.log(`An unknown error occurred ${err}`);
    }
  }, [navigateTo]);

  useEffect(() => {
    currentUser();
  }, [currentUser]);
}

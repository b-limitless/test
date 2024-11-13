import React, { useEffect } from "react";
import { request } from "../utils/request";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function useCurrentUser() {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/signin");
  };
  const currentUser = async () => {
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
  };

  useEffect(() => {
    currentUser();
  }, []);
}

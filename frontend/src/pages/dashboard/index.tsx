import React, { useEffect } from 'react';
import { request } from '../../utils/request';
import axios from 'axios';

const currentUser = async () => {
  try {
    // Submit the form to service
    await request({
      url: "http://localhost:3000/users/currentUser",
      method: "post",
      
    });
  } catch (err) {
    if (axios.isAxiosError(err) && err.response) {
      throw err.response.data; // Pass the error response data to be accessible in useMutation
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};


export default function Dashboard() {
  // Lets make request to get the current user

  useEffect(() => {
    currentUser();
  }, [])
  return (
    <div>Dashboard</div>
  )
}

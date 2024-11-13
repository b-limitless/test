import React, { useEffect } from 'react';
import { request } from '../../utils/request';
import axios from 'axios';
import useCurrentUser from 'hooks/useCurrentUser';




export default function Dashboard() {
  // Lets make request to get the current user

  useCurrentUser()
  return (
    <div>Dashboard</div>
  )
}

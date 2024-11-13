import { Outlet } from "react-router-dom";
import useCurrentUser from "hooks/useCurrentUser";

export default function ProtectedRoute() {
  useCurrentUser(); // Only runs the check without extra state or redirection

  return <Outlet />; // Render the nested component if authenticated, or the request will handle redirecting
}

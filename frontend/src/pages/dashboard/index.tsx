import useCurrentUser from "hooks/useCurrentUser";
import "./dashboard.scss";
import Button from "components/Button";
import { request } from "utils/request";
import { APIs } from "utils/apis";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const logOutUser = async () => {
  try {
    // Submit the form to service
    await request({
      url: APIs.auth.signout,
      method: "post",
    });
  } catch (err) {
    throw new Error("An unknown error occurred");
  }
};

export default function Dashboard() {
  // Lets make request to get the current user
  const navigate = useNavigate();

  const {
    mutate: logOutUserMutation,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      navigate("/signin");
    },
  });
  

  useCurrentUser();

  const logouthandler = () => {
    // Run mutation
    logOutUserMutation()
  };

  return (
    <div className="dashboard">
      <div className="welcome">
        <h1>Welcome to the application.</h1>

        <Button variant="secondary" text="logout" onClick={logouthandler} />
      </div>
    </div>
  );
}

import { useMutation } from "@tanstack/react-query";
import Template from "common/Template/Template";
import CustomLoadingButton from "components/Button/LoadingButton";
import { useNavigate } from "react-router-dom";
import { APIs } from "utils/apis";
import { request } from "utils/request";
import "./dashboard.scss";
import ErrorText from "components/Help/ErrorText";

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

  // useCurrentUser();

  const logouthandler = () => {
    // Run mutation
    logOutUserMutation();
  };

  return (
    <Template message="Welcome to the application.">
     {isError && (
          <ErrorText 
          style={{padding: '1rem 0 1rem 0', textAlign:'center'}}
          text={error?.message || "Something went wrong"} />
        )}

       <CustomLoadingButton
          onClick={logouthandler}
          loading={isPending}
          loadingPosition="start"
          variant="contained"
          type="secondary"
        >
          Logout
        </CustomLoadingButton>

    </Template>
  );
}

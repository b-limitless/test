import useCurrentUser from "hooks/useCurrentUser";
import "./dashboard.scss";
import Button from "components/Button";

export default function Dashboard() {
  // Lets make request to get the current user

  useCurrentUser();
  return (
    <div className="dashboard">
      <div className="welcome">
        <h1>Welcome to the application.</h1>

        <Button variant="secondary" text="logout" />
      </div>
    </div>
  );
}

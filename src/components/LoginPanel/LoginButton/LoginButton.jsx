import Button from "./Button/Button";

function LoginButton({ currentUser, setCurrentUser }) {
  if (currentUser !== null) {
    return (
      <div>
        <p>You logged in as {currentUser.name}.</p>
        <Button
          onClick={() => {
            setCurrentUser(null);
          }}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "FutureSkills" });
      }}
    >
      Log in as FutureSkills
    </Button>
  );
}

export default LoginButton;

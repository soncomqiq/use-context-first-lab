import "./LoginPanel.css";
import LoginButton from "./LoginButton/LoginButton";
import Panel from "./Panel/Panel";

function LoginPanel({ currentUser, setCurrentUser }) {
  return (
    <Panel title="Welcome">
      <LoginButton currentUser={currentUser} setCurrentUser={setCurrentUser} />
    </Panel>
  );
}

export default LoginPanel;

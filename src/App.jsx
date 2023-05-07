import { useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList/ImageList";
import LoginPanel from "./components/LoginPanel/LoginPanel";

export function App() {
  const [isLarge, setIsLarge] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <LoginPanel currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <ImageList imageSize={imageSize} />
    </>
  );
}

export default App;

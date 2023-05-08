import { useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList/ImageList";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import { ImageContext } from "./contexts/image-context";
import { UserContext } from "./contexts/user-context";

export function App() {
  const [isLarge, setIsLarge] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const imageSize = isLarge ? 150 : 100;
  return (
    <UserContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}
    >
      <ImageContext.Provider value={imageSize}>
        <LoginPanel />
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
      </ImageContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

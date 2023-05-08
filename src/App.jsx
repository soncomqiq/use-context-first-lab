import { useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList/ImageList";
import LoginPanel from "./components/LoginPanel/LoginPanel";
import { ImageContext } from "./contexts/image-context";
import { UserContext } from "./contexts/user-context";
import { MainProvider } from "./contexts/main-provider";

export function App() {
  const [isLarge, setIsLarge] = useState(false);

  return (
    <MainProvider isLarge={isLarge}>
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
      <ImageList />
    </MainProvider>
  );
}

export default App;

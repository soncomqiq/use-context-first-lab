import { useState } from "react";
import "./App.css";
import ImageList from "./components/ImageList/ImageList";

export function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
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

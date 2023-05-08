import { useState } from "react";
import { ImageContext } from "./image-context";
import { UserContext } from "./user-context";

export function MainProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);

  const imageSize = props.isLarge ? 150 : 100;
  return (
    <UserContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}
    >
      <ImageContext.Provider value={imageSize}>
        {props.children}
      </ImageContext.Provider>
    </UserContext.Provider>
  );
}

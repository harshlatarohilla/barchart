import React, { useState } from "react";
import Barchart from "./Barchart";
import Profile from "./Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      
      {isLoggedIn ? (
        <Barchart setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Profile setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}
export default App;

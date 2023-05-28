import React, { useState } from "react";
import LoginPage from "./LoginPage";

import CardListComponent from "./CardListComponent";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      
      {isLoggedIn ? (
        
        <CardListComponent />
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
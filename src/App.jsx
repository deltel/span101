import React, { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Main from "./Main/Main";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  return (
    <div className="App">
      <Navbar isAuth={isAuth} handleAuth={setIsAuth} />
      <Main handleAuth={setIsAuth} isAuth={isAuth} />
    </div>
  );
}

export default App;

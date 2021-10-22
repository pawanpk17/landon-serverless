import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import useHover from "./hooks/useHover";

import "./App.css";

function App() {
  const [hoverRef, hovered] = useHover();

  const style = {
    backgroundColor: hovered ? "red" : ""
  };

  return (
    <div>
      <Header />
      <Main />
      <Footer />
      <div ref={hoverRef} style={style}>
        <h1>Landon hotel</h1>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./assets/styles/global.scss";
import Routes from "./Routes";
import Boxed from "./templates/Boxed";

function App() {
  return (
    <div className="App">
      <Boxed>
        <Routes />
      </Boxed>
    </div>
  );
}

export default App;

import React from "react";
import "./assets/styles/global.scss";

import Signup from "./pages/Signup";
import Boxed from "./templates/Boxed";

function App() {
  return (
    <div className="App">
      <Boxed>
        <Signup />
      </Boxed>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";

import { Counter } from "./container/counter";

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
};

export default App;

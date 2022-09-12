import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}>({ isDark: false, setIsDark: () => {} });

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider value={{ isDark: isDark, setIsDark: setIsDark }}>
          <RootRouter />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

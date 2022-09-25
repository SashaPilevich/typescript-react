import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";
import userEvent from "@testing-library/user-event";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: any;
  setUser: (value: any) => void;
}>({ isDark: false, setIsDark: () => {}, user: null, setUser: () => {} });

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider
          value={{ isDark: isDark, setIsDark: setIsDark, user, setUser }}
        >
          <RootRouter />
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;

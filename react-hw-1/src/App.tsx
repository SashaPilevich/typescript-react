import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";
import userEvent from "@testing-library/user-event";
import { IUser } from "./types/auth";
import { getUser } from "./api/auth";

export const Context = createContext<{
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  user: IUser | null;
  setUser: (value: IUser | null) => void;
}>({
  isDark: false,
  setIsDark: () => {},
  user: null,
  setUser: (value: IUser | null) => {},
});

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    let isOk = true;
    getUser()
      .then((response) => {
        if (response.ok) {
          isOk = true;
        } else {
          isOk = false;
        }
        return response.json();
      })
      .then((json) => {
        if (isOk) {
          setUser(json);
        }
      });
  }, []);
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

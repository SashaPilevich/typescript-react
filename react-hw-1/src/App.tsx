import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RootRouter } from "./router";
import userEvent from "@testing-library/user-event";
import { IUser } from "./types/auth";
import { getUser } from "./api/auth";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import { Preloader } from "./components/Preloader";

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

const access = localStorage.getItem("access");

function App() {
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [isReady, setIsReady] = useState(!access);

  useEffect(() => {
    let isOk = true;

    if (access) {
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
        })
        .finally(() => {
          setIsReady(true);
        });
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Context.Provider
          value={{ isDark: isDark, setIsDark: setIsDark, user, setUser }}
        >
          {isReady ? <RootRouter /> : <Preloader />}
        </Context.Provider>
        <NotificationContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

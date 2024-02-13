import "./App.css";
import RoutesProject from "./RoutesProject";
import Navbar from "./components/Navbar";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);
export const UserContext = createContext(null);

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [user, setUser] = useState("Dogukan Dogan");

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <UserContext.Provider value={user}>
          <Navbar setDarkTheme={setDarkTheme} />
          <RoutesProject />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

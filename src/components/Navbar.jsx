import React, { useContext } from "react";
import "./Navbar.css";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ThemeContext, UserContext } from "../App";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { setDarkTheme } = props;
  const darkTheme = useContext(ThemeContext);
  const user = useContext(UserContext);

  const handleDarkTheme = () => {
    setDarkTheme((preVal) => !preVal);
  };

  return (
    <>
      <nav className={`navbar ${darkTheme ? "dark" : "light"}`}>
        <div className="logo">Eat & Fit</div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/meals">Meals</Link>
          </li>
          <li>
            <Link to="/calculate">Calculate</Link>
          </li>
          <li>
            <Link to="/profile">{user ? user : "Your Profile"}</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
        <FormControlLabel
          control={<Switch onChange={handleDarkTheme} checked={darkTheme} />}
          label="Dark Theme"
        />
      </nav>
    </>
  );
};

export default Navbar;

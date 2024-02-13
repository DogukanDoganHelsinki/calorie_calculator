import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Meals from "./components/Meals";
import Calculate from "./components/Calculate";
import Profile from "./components/Profile";
import Feedback from "./components/Feedback";

const RoutesProject = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/calculate" element={<Calculate />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
};

export default RoutesProject;

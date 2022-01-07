import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "../Components/Navbar";
import Home from "../Pages/Home";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Login from "../Components/Login";
import Register from "../Components/Register";

const Routers = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Router>
  );
};
export default Routers;

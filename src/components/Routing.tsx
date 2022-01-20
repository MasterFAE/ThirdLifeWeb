import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";

interface Props {}

const Routing = (props: Props) => {
  let user = false;

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="*" element={<Redirect />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </>
        ) : (
          <>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

const Redirect = () => {
  let navigator = useNavigate();
  useEffect(() => {
    navigator("/login");
  }, []);
  return <></>;
};

export default Routing;

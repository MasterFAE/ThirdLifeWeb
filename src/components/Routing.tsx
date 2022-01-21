import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../redux/types";
import { LogIn as ResolverLogIn } from "../redux/resolvers/userResolver";

interface Props {}

const Routing = (props: Props) => {
  const dispatch: Dispatch<any> = useDispatch();
  const user: User = useSelector((state) => state);
  const actionLogin = React.useCallback((data: User) => dispatch(ResolverLogIn(data)), [dispatch]);
  useEffect(() => {
    axios.post("token").then((res) => {
      if (res.data) {
        actionLogin(res.data);
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        {!user || !user.id ? (
          <>
            <Route path="*" element={<Redirect direction={"/login"} />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Redirect direction={"/"} />} />
            <Route path="/" element={<App />} />
            <Route path="register" element={<Register />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
const Redirect = (props: any) => {
  let navigator = useNavigate();
  useEffect(() => {
    navigator(props.direction);
  }, []);
  return <></>;
};

export default Routing;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { Announcement, Update, User } from "../redux/types";
import { LogIn as ResolverLogIn, LogOff as ResolverLogOff } from "../redux/resolvers/userResolver";
import WhitelistBasvuru from "../pages/WhitelistBasvuru";
import { GetAnnouncements, GetUpdate } from "../redux/resolvers/generalResolver";

interface Props {}

const Routing = (props: Props) => {
  const dispatch: Dispatch<any> = useDispatch();
  //@ts-ignore
  const user: User = useSelector((state) => state.user);
  const actionLogin = React.useCallback((data: User) => dispatch(ResolverLogIn(data)), [dispatch]);
  const actionAnnouncement = React.useCallback((data: Announcement[]) => dispatch(GetAnnouncements(data)), [dispatch]);
  const actionUpdates = React.useCallback((data: Update[]) => dispatch(GetUpdate(data)), [dispatch]);

  const actionLogoff = React.useCallback(() => dispatch(ResolverLogOff()), [dispatch]);
  useEffect(() => {
    /* @ts-ignore */
    axios
      .post("token")
      .then((res) => {
        if (res.data) {
          actionLogin(res.data.user);
          actionAnnouncement(res.data.announcements);
          actionUpdates(res.data.updates);
        } else {
          actionLogoff();
        }
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  }, []);
  if (user === undefined) {
    console.error("USER NOT FOUND");
    return <></>;
  }
  return (
    <Router>
      <Routes>
        {/* @ts-ignore */}
        {!user || !user.id ? (
          <>
            <Route path="*" element={<Redirect direction={"/login"} />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </>
        ) : user.whitelist === true ? (
          <>
            <Route path="*" element={<Redirect direction={"/"} />} />
            <Route path="/" element={<App />} />
          </>
        ) : (
          <>
            <Route path="*" element={<Redirect direction={"/"} />} />
            <Route path="/" element={<App />} />
            <Route path="whitelist-basvuru" element={<WhitelistBasvuru />} />
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

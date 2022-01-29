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
import { GetAnnouncements, GetUpdate } from "../redux/resolvers/generalResolver";
import NonWLSidebar from "./NonWLSidebar";
import WhitelistBasvuru from "../pages/WhitelistBasvuru";
import WhitelistBasvuru_Exam from "../pages/WhitelistBasvuru_Exam";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
library.add(faSpinner);

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
  if (user.loading) return <LoadingComponent></LoadingComponent>;
  return (
    <Router>
      <Routes>
        {/* @ts-ignore */}
        {!user || !user.id ? (
          <>
            <Route path="*" element={<Redirect direction={"/login"} />} />
            <Route path="/login" element={<Login confirmed={false} />} />
            <Route path="/login/:id" element={<Login confirmed={true} />} />
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
            <Route path="whitelist-exam" element={<WhitelistBasvuru_Exam />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export const LoadingComponent = (props: any) => {
  return (
    <main className="main-wrapper flex">
      <div className="sidebar-wrapper mr-7 shadow-md" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <FontAwesomeIcon className="col-12 h-100 " icon="spinner" pulse size="2x" />
      </div>
      <div className="container mainpage-wrapper">
        <div className="mainpage-container">
          <div className="flex col-12 pt-2">
            <div
              className="mainpage-maincontent shadow-md text-center col-12 px-4 pb-4"
              style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <FontAwesomeIcon className="col-12 h-100 " icon="spinner" pulse size="2x" />
            </div>
          </div>
        </div>
      </div>
    </main>
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

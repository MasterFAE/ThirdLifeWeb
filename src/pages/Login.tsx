import React, { BaseSyntheticEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { Announcement, Update, User } from "../redux/types";
import { LogIn as ResolverLogIn } from "../redux/resolvers/userResolver";
import { GetAnnouncements, GetUpdate } from "../redux/resolvers/generalResolver";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [Error, setError] = useState<any>(null);
  const [Status, setStatus] = useState<any>(null);
  const dispatch: Dispatch<any> = useDispatch();
  const actionLogin = React.useCallback((data: User) => dispatch(ResolverLogIn(data)), [dispatch]);
  const actionAnnouncement = React.useCallback((data: Announcement[]) => dispatch(GetAnnouncements(data)), [dispatch]);
  const actionUpdates = React.useCallback((data: Update[]) => dispatch(GetUpdate(data)), [dispatch]);

  const LogIn = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setStatus(null);
    setError(null);
    if (password.length === 0 || username.length === 0) {
      setError("Lütfen tüm alanları doldurun!");
      return;
    }
    if (typeof username !== "undefined") {
      if (!username.match(/^[a-zA-Z0-9]+$/i)) {
        setError("Hatalı kullanıcı ismi");
        return;
      }
    }

    axios
      .post("login", { username: username, password })
      .then((res) => {
        if (res.data) {
          actionLogin(res.data.user);
          actionAnnouncement(res.data.announcements);
          actionUpdates(res.data.updates);
        }
      })
      .catch((err) => {
        if (err.response) {
          setStatus(null);
          setError(err.response.data.error);
        }
      });
  };

  return (
    <div className="signin-wrapper">
      <form className="text-center row col-6">
        <h1 className="mb-2">Third Life</h1>
        <h3>Giriş Yap</h3>
        {Error && (
          <div className="alert alert-danger mb-2 p-0" role="alert">
            <p className="font-semibold text-center h-full w-full break-words p-1 mb-0 overflow-hidden">{Error}</p>
          </div>
        )}
        {Status && (
          <div className="alert alert-success mb-2 p-0" role="alert">
            <p className="font-semibold text-center h-full w-full break-words p-1 mb-0 overflow-hidden">{Status}</p>
          </div>
        )}

        <input
          className="form-control my-2 h-8"
          autoComplete="on"
          required
          placeholder="Kullanıcı giriniz"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          className="form-control mb-2 h-8"
          required
          autoComplete={"current-password"}
          placeholder="Şifrenizi giriniz"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <a onClick={(e) => LogIn(e)} className="btn btn-primary text-center">
          Giriş Yap
        </a>
        <p>
          Henüz üyeliğiniz yok mu?{" "}
          <Link to={"/register"} id="signup-btn">
            Kayıt Ol
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;

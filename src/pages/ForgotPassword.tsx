import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Login.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { Announcement, Update, User } from "../redux/types";
import { LogIn as ResolverLogIn } from "../redux/resolvers/userResolver";
import { GetAnnouncements, GetUpdate } from "../redux/resolvers/generalResolver";

function Login(props: any) {
  const { confirmId } = useParams();
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [Error, setError] = useState<any>(null);
  const [Status, setStatus] = useState<any>(null);

  useEffect(() => {
    if (confirmId) {
      axios
        .get(`confirmation/${confirmId}`)
        .then((res) => {
          setStatus(res.data.message);
        })
        .catch((error) => {
          console.log(error);
          setError("Doğrulama esnasında hata oluştu!");
        });
    }
  }, [confirmId]);

  const LogIn = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setStatus(null);
    setError(null);
    if (email.length === 0 || username.length === 0) {
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
      .post("login", { username: username, email })
      .then((res) => {
        if (res.data) {
          setStatus("");
          setError(null);
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
      <form className="text-center row col-6 shadow-md">
        <h1 className="mb-2" id="login-title">
          Third Life
        </h1>
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
          className="login-input form-control my-2 h-8 "
          autoComplete="on"
          required
          placeholder="Kullanıcı adını giriniz"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          className="login-input form-control mb-2 h-8"
          required
          placeholder="E-mailinizi girin"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <a onClick={(e) => LogIn(e)} className="login-button btn btn-outline-primary text-center mb-2">
          Giriş Yap
        </a>

        <Link to={"/login"} className="login-extra-link">
          Geri Dön
        </Link>
      </form>
    </div>
  );
}

export default Login;

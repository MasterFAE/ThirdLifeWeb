import React, { BaseSyntheticEvent, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../css/Login.css";

function App() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const LogIn = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };
  const Register = (e: BaseSyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className="signin-wrapper">
      <form className="text-center row col-6">
        <h1 className="mb-2">Third Life</h1>
        <h3>Giriş Yap</h3>
        <input
          className="form-control my-2"
          required
          placeholder="Email adresinizi giriniz"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="form-control mb-2"
          required
          placeholder="Şifrenizi giriniz"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <a href="#" onClick={(e) => LogIn(e)} className="btn btn-primary">
          Giriş Yap
        </a>
        <p>
          Henüz üyeliğiniz yok mu?{" "}
          <a href="#" id="signup-btn" onClick={(e) => Register(e)}>
            Kayıt Ol
          </a>
        </p>
      </form>
    </div>
  );
}

export default App;

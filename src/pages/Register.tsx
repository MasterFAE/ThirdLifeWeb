import React, { useState, BaseSyntheticEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
interface Props {}

const Register = (props: Props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [Error, setError] = useState<any>(null);
  const [Status, setStatus] = useState<any>(null);
  const Register = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    setStatus(null);
    setError(null);
    if (email.length === 0 || password.length === 0 || username.length === 0 || confirmpassword.length === 0) {
      setError("Lütfen tüm alanları doldurun!");
      return;
    }
    if (typeof email !== "undefined") {
      let lastAtPos = email.lastIndexOf("@");
      let lastDotPos = email.lastIndexOf(".");
      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          email.length - lastDotPos > 2
        )
      ) {
        setError("Lütfen geçerli email girin!");
        return;
      }
    }

    if (typeof username !== "undefined") {
      if (!username.match(/^[a-zA-Z0-9]+$/i)) {
        setError("Kullanıcı isminde sadece harf ve sayılar kullanılabilir!");
        return;
      }
    }
    axios
      .post("register", { email, password, username })
      .then((res) => {
        setemail("");
        setusername("");
        setconfirmpassword("");
        setpassword("");
        setError(null);
        setStatus("Hesap başarıyla oluşturuldu!");
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
        <h3>Kayıt Ol</h3>
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
          required
          placeholder="Email adresinizi giriniz"
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="form-control mb-2 h-8"
          required
          placeholder="Kullanıcı adınızı giriniz"
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <input
          className="form-control mb-2 h-8"
          required
          placeholder="Şifrenizi giriniz"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          className="form-control mb-2 h-8"
          required
          placeholder="Şifrenizi giriniz"
          type="password"
          value={confirmpassword}
          onChange={(e) => setconfirmpassword(e.target.value)}
        />
        <button type="submit" onClick={(e) => Register(e)} className="btn btn-primary text-center">
          Kayıt Ol
        </button>
        <p className="mt-2">
          Giriş ekranına{" "}
          <Link to={"/login"} id="signup-btn">
            geri dön
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

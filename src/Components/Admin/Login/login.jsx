import React, { useState, useContext } from "react";
import "./login.css";
import logo from "../../../Images/mobilelogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../../../store/FirebaseContext";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/admin");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <section className="adminLoginContainer">
        <img src={logo} alt="" className="imgLogo" />
        <div className="logincontainer">
          <div className="signinContainer">
            <p className="AdminText">管理者ページ</p>
            <p className="signInText">サイン</p>
          </div>
          <div className="signinInputDiv">
            <div className="signinEmailInputDiv">
              <i class="fas fa-user"></i>
              <input
                type="email"
                name="email"
                placeholder="Username"
                className="usernameInput"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
            </div>
            <div className="signinPasswordInputDiv">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="passwordInput"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
            </div>
          </div>
          <Link to={"/"} className="adminLoginReturn">
            ホームページへ戻る
          </Link>
          <button className="btn btn-warning btn-login" onClick={handleLogin}>
            ログイン
          </button>
        </div>
      </section>
    </div>
  );
}

export default AdminLogin;

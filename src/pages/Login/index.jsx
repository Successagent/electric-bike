import PageIndication from "../../Components/PageIndication";

import PagesHero from "../../Components/PagesHero";
import Button from "../../Components/Button";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "../Login/Login.css";
import "../Registration/Registration.css";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill out all inputs");
    } else if (email !== "" && password !== "") {
      try {
        const loginUser = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email: email,
            password: password,
          }
        );
        console.log(loginUser);
        if (loginUser.status === 200) {
          localStorage.setItem("token", loginUser.data.accessToken);
          localStorage.setItem("user", JSON.stringify(loginUser.data));

          navigate("/dashboard");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <PagesHero />
      <PageIndication page="Account" other="Account" />
      <div className="register-form login-form">
        <section className="support-form-section">
          <div>
            <h2 className="h2">Login</h2>
            <div className="input-con">
              <form className="review-form" action="" onSubmit={handleSubmit}>
                <p className="p">Email Address *</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                <p className="p">Password *</p>
                <input
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="forget-pass">
                  <div className="flex">
                    <input type="checkbox" />
                    <p className="p">Remember me</p>
                  </div>
                  <Link to="/forget-password" style={{ color: "red" }}>
                    <p className="p forget-password">Forget Password?</p>
                  </Link>
                </div>
                <Button title="Login" />
              </form>
            </div>
          </div>
        </section>
        <div>
          <h2 className="h2">Register</h2>
          <p className="p">
            Login to your account to access your user dashboard, manage your
            orders and profile
          </p>
          <Link to="/register">
            <Button title="Register"></Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default index;

import PageIndication from "../../Components/PageIndication";

import PagesHero from "../../Components/PagesHero";
import Button from "../../Components/Button";

import axios from "axios";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import "../Registration/Registration.css";

const index = ({
  cart,
  carts,
  addToCart,
  favorite,
  visible,
  productVisible,
  formVisible,
  toggleFavorite,
  toggleVisible,
  setCarts,
  setToggleFavorite,
  setProductVisible,
  setVisible,
  increamentQuantity,
  decreamentQuantity,
  removeFromCart,
  getQuantityTotal,
  getTotalPrice,
  cardThree,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      password === "" ||
      confirmPassword === "" ||
      email === ""
    ) {
      alert("Please ensure all inputs are filled");
    } else if (password.length && confirmPassword < 5) {
      alert("Password must be greater than 5 digit");
    } else if (password === confirmPassword) {
      try {
        const registerUser = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            fname: firstName,
            lname: lastName,
            password: password,
            confirmPassword: confirmPassword,
            email: email,
          }
        );
        if (registerUser.status === 201) {
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="register-page">
        <PagesHero />
        <PageIndication page="Account" other="Account" />
        <div className="register-form">
          <section className="support-form-section">
            <div>
              <h2 className="h2">Register</h2>
              <div className="input-con">
                <form className="review-form" onSubmit={handleSubmit}>
                  <p className="p">First Name *</p>
                  <input
                    type="text"
                    name="firstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <p className="p">Last Name *</p>
                  <input
                    name="lastName"
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <p className="p">Email Address *</p>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p className="p">Password *</p>
                  <input
                    type="text"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className="p">Confirm Password *</p>
                  <input
                    type="text"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <p className="p" id="p-form">
                    We collect your data to enable you have a wonderful
                    experience using our website. Your information is safe with
                    us
                  </p>
                  <Button title="Register" />
                </form>
              </div>
            </div>
          </section>
          <div>
            <h2 className="h2">Login</h2>
            <p className="p">
              Login to your account to access your user dashboard, manage your
              orders and profile
            </p>
            <Link to="/login">
              <Button title="Login"></Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

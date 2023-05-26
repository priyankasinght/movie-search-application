import "./LoginPage.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // Navigation function from react-router-dom
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUsers = localStorage.getItem("user");
    console.log(storedUsers);
    const { email, password } = formData;

    if (email === "") {
      alert("Email field is required. If you have not signed up yet, please sign up for an account.");
    } else if (password === "") {
      alert("Password field is required. If you have not signed up yet, please sign up for an account.");
    } else {
      if (storedUsers && storedUsers.length) {
        const users = JSON.parse(storedUsers);
        const loggedInUser = users.filter((user) => {
          return user.email === email && user.password === password;
        });

        if (loggedInUser.length === 0) {
          alert("Invalid credentials");
        } else {
          console.log("User logged in successfully");

          localStorage.setItem("user_login", JSON.stringify(loggedInUser));

          navigate("/Home");
        }
      }
    }
  };

  return (
    <div className="login-ctr">
      <div className="login-img">
        <img className="img" src='https://w0.peakpx.com/wallpaper/145/713/HD-wallpaper-beauty-and-the-beast-2017-poster-beauty-and-the-beast-movie-rose-emma-watson-fantasy-luke-evans-disney-blue.jpg' alt='' />
      </div>
      <div className="login-detail">
        <div>
          <h1>Welcome Back</h1>
          <h5>Sign in to your Account</h5>
        </div>
        <form>
          <div
            className="input-container"
            style={{
              width: "350px",
              maxWidth: "100%",
            }}
          >
            <input
              className="input"
              type="email"
              placeholder="Enter email id"
              name="email"
              onChange={handleInputChange}
            />
          </div>
          <div className="input-container">
            <input
              className="input"
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleInputChange}
            />
          </div>

          <button className="login-btn" type="submit" onClick={handleLogin} variant="outlined">
            Login
          </button>
        </form>
        <Link to={"/CreateAccount"} className="login-link">
          <button className="sign-btn">SignUp</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;

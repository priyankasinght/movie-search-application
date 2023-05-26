import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigateToPage = useNavigate(); // Use a more descriptive variable name

  const [formData, setFormData] = useState({ // Change 'inputValue' to 'formData' for clarity
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    const { value, name } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (name === "") {
      alert("Name field is required!");
    } else if (email === "") {
      alert("Email field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else {
      navigateToPage("/");
      localStorage.setItem("user", JSON.stringify([formData]));
    }
  };

  return (
    <div className="signup-container">
      <div className="detail-cont">
        <h2>Welcome To SignUp page</h2>
        <h4>SignUp to your Account by filling valid details</h4>
        <form type="submit">
          <label>Name</label><br />
          <input
            className="inp-field"
            placeholder="Enter Name"
            name="name"
            onChange={handleInputChange}
          /><br />

          <label>Email</label><br />
          <input
            className="inp-field"
            fullWidth
            label="Email"
            type="email"
            placeholder="Enter email id"
            name="email"
            onChange={handleInputChange}
          /><br />

          <label>Password</label><br />
          <input
            className="inp-field"
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleInputChange}
          /><br />

          <button
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
            variant="outlined"
          >
            Submit Details
          </button>
        </form>
        <p className="signup">
          Already Have an Account?{" "}
          <Link to={"/"} style={{ textDecoration: "none", color: 'green' }}> Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

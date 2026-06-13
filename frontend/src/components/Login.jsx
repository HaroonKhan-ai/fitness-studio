import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./signUp.css"
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [subData, setsubData] = useState(() => {
    const savedLogin = localStorage.getItem("loginData");
    return savedLogin ? JSON.parse(savedLogin) : {};
  });

  useEffect(() => {
    localStorage.setItem("loginData", JSON.stringify(subData));
  }, [subData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    setsubData(data);
     navigate("/products");
  };

  function deleteLog() {
    setsubData({});
    localStorage.removeItem("loginData");
  }

  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <h4>Please SignUp first</h4>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input Field */}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </div>

        <div className="input-group">
          <label>
            Password:
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
          </label>
          {errors.password && (
            <span className="error-msg">{errors.password.message}</span>
          )}
        </div>

        <button type="submit">Log in</button>
      </form>
      <Link to="/signUp" className="signBtn">Sign Up</Link>

      <div className="loginData">
        <div className="email">{subData.email}</div>
        <div className="password">
          {subData.password}
          {subData.email ? <button onClick={deleteLog}>Delete</button> : ""}
        </div>
      </div>
    </div>
  );
};

export default Login;

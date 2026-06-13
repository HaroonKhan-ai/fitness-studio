import React from 'react'
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
const navigate = useNavigate();

 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    localStorage.setItem("haroon", JSON.stringify(data))
   navigate("/login");
    
  };


  return (
   <div className="login-container">
      <h2>Welcome</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
           <div className="input-group">
          <label>NAME</label>
          <input
            type="text"
            placeholder="Enter Name here..."
            {...register("text", { required: "Name is required" })}
          />
          {errors.text && (
            <span className="error-msg">{errors.text.message}</span>
          )}
        </div>

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

        <button type="submit">Sign Up</button>
      </form>

      
    </div>
  )
}

export default SignUp

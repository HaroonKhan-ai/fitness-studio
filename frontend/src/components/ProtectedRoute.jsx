import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  // 1. Grab the signup data and the active login session text from browser storage
  const signupData = localStorage.getItem("haroon");
  const loginSession = localStorage.getItem("loginData");

  // 2. If either box is totally empty, they haven't signed up or logged in!
  if (!signupData || !loginSession) {
    alert("Please sign up or log in first to access our products!");
    return <Navigate to="/login" replace />; // Automatically kicks them back to login page
  }

  // 3. Convert the raw text strings back into readable JavaScript objects
  const registeredUser = JSON.parse(signupData);
  const activeUser = JSON.parse(loginSession);

  // 4. Compare the logged-in email to the registered email
  if (activeUser.email === registeredUser.email) {
    return children; // Match found! Give them access to the page
  } else {
    alert("Credentials do not match our records. Please sign up first!");
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
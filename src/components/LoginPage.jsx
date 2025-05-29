import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginForm() {
  

  const handleLogin = async (e) => {
    e.preventDefault();


    
  };

  return (
    <form onSubmit={handleLogin} className="login-container">
      <h2>🔐 로그인</h2>
      <input/>
      <input/>
      <button type="submit">로그인</button>
    </form>
  );
}

export default LoginForm;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

function LoginForm() {
   const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [message,setMessage]=useState(""); 
  const navigate = useNavigate(); 


  const postUser = async () => {
    try {
    const res  = await axios.post("https://reqres.in/api/login", {
      email : email,
      password : password,
    }, {
      headers: {
        "x-api-key": "reqres-free-v1"} 
     });

    localStorage.setItem("token", res.data.token); 
    localStorage.setItem("email", email); 
    navigate("/userlist"); 
    
  } catch (error) { 
    const errMsg = error.response?.data?.error || "User not found";
      setMessage(errMsg); 
  }
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    await postUser(); 
};
 const handleEmail = (e) => {
    setEmail(e.target.value)
  };

  const handlePW = (e) => {
    setPassword(e.target.value)
  };

  return (
   <form onSubmit={handleLogin} className="login-container">
      <h2>🔐 로그인</h2>
      <input required value ={email} onChange={handleEmail} placeholder="이메일 입력"/>
      <input required value={password} onChange={handlePW} placeholder="비밀번호 입력" type="password"/>
      <button type="submit" >로그인</button>
      {message && <p className="message">{message}</p>}
    </form>
  );
}

export default LoginForm;

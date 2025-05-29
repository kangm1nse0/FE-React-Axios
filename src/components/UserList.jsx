import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/UserList.css";

function UserList() {

  return (
    <div className="user-container">
      <div className="user-info-box">
        <p><strong>이메일:</strong> { }</p>
        <p><strong>토큰:</strong> { }</p>
      </div>

      <h2 className="user-title">👥 유저 목록</h2>

      <input
        className="user-search"
      />

      <div className="user-list">
     
      </div>
    </div>
  );
}

export default UserList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/UserList.css";

function UserCard({ user }) {
  return (
    <div className="user-card" key={user.id}>
      <img className="user-avatar" src={user.avatar} alt="avatar" />
      <h4>{user.first_name} {user.last_name}</h4>
      <p className="user-email">{user.email}</p>
    </div>
  );
} 
function UserList() {
const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // 로그인한 사용자 정보 불러오기
    const storedEmail = localStorage.getItem("email");
    const storedToken = localStorage.getItem("token");

    if (storedEmail) setEmail(storedEmail);
    if (storedToken) setToken(storedToken);

    // 사용자 목록 요청
    axios.get("https://reqres.in/api/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.error("유저 불러오기 실패:", err);
      });
  }, []);

  // 검색 필터링
  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="user-container">
      <div className="user-info-box">
        <p><strong>이메일:</strong> { email}</p>
        <p><strong>토큰:</strong> {token }</p>
      </div>

      <h2 className="user-title">👥 유저 목록</h2>

      <input
        className="user-search"
        placeholder="이메일 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

     <div className="userlist">
          {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
        </div>
    </div>
  );
}

export default UserList;

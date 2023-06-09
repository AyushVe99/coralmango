import React, { useState } from "react";
import "./App.css"
const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "demo@coralmango.com" && password === "demo123") {
      handleLogin();
    } else {
      setError("Invalid Credentials!");
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginDiv">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username : </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Name"/>
        </div>
        <div>
          <label>Password : </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <button type="submit" className="loginBtn">Login</button>
        {error && <p>{error}</p>}
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
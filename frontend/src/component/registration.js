import React, { useState } from "react";

const Registration = ({ onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Admin");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/${userType}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        onRegister(userType, data);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userType">User Type:</label>
      <select
        id="userType"
        value={userType}
        onChange={(event) => setUserType(event.target.value)}
      >
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Vendor">Vendor</option>
      </select>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;

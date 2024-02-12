import React from "react";

const Logout = () => {
  const handleLogout = () => {
    // Log out the user here
    console.log("User logged out");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;

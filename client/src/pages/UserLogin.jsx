import React, { useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const UserLogin = () => {
  return (
    <div>
      <NavBar />
      <form>
        <h2>Login</h2>
        <input type="text" name="" id="username" />
        username
        <input type="password" name="" id="password" />
        password
      </form>
      <Footer />
    </div>
  );
};

export default UserLogin;
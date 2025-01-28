import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Books = () => {
  return (
    <div>
      <NavBar />
      <h2>Available Books</h2>
      <BookCard />
      <Footer />
    </div>
  );
};

export default Books;
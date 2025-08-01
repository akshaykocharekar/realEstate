import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SideForm from "./SideForm"; // Make sure the path is correct

const Layout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <SideForm /> {/* 👈 Floating contact button here */}
    </div>
  );
};

export default Layout;

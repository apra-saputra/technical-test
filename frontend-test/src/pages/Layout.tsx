import React from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="mb-12">{children}</main>
    </>
  );
};

export default Layout;

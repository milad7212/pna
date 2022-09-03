import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import TopHeader from "./TopHeader";

function Layout({ children }) {
  return (
    <div className="">
      <TopHeader />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

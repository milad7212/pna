import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import TopHeader from "./TopHeader";
import { AiFillPlusCircle } from "react-icons/ai";
import { useInView } from "react-intersection-observer";

function Layout({ children }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  console.log("inView", inView);
  return (
    <div className="">
      <TopHeader refral={ref} />
      <Header changeColor={inView} />
      <main>{children}</main>
      <Footer />
      <div className="fixed z-50 left-4 bottom-4 lg:hidden">
        <div className="bg-white rounded-full shadow-md cursor-pointer active:scale-95">
          <AiFillPlusCircle size={50} color="#3B82F6" className="" />
        </div>
      </div>
    </div>
  );
}

export default Layout;

import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import History from "../components/History";
import ImageSlide from "../components/ImageSlide";
import Information from "../components/Information";
import Organizer from "../components/Organizer";
import Roles from "../components/Roles";
import Supporters from "../components/Supporters";
import TopHeader from "../components/TopHeader";
import Videos from "../components/Videos";

const imageAnimat = {
  offscreen: { opacity: 0 },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

export default function Home() {
  return (
    <div className="">
      {/* hero slider */}
      <div className="bg-[url('/backgrand.svg')] mb-16 bg-no-repeat bg-cover xl:bg-contain  xl:bg-repeat-x  ">
        <HeroSlider />

        {/* about */}

        <About />

        {/* information */}
        <Information />
      </div>

      {/* roles */}
      <Roles />

      {/* history */}
      <History />

      {/* Organizer */}
      <Organizer />

      {/* supporters */}
      <Supporters />

      {/* videos */}
      <Videos />

      {/* images */}
      <ImageSlide />
    </div>
  );
}

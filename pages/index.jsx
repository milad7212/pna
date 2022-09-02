import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import HeroSlider from "../components/HeroSlider";
import History from "../components/History";
import Information from "../components/Information";
import Organizer from "../components/Organizer";
import Roles from "../components/Roles";
import Supporters from "../components/Supporters";
import { motion } from "framer-motion"


const imageAnimat={
  offscreen:{opacity:0},
  onscreen:{opacity:1, transition:{
    type:'spring',
    bounce:.4,
    duration:3
  }},
 
}

export default function Home() {
  return (
    <div
    
    className="pb-28  ">
      {/* top header */}

      {/* header */}

      {/* hero slider */}
      <div className="bg-[url('/backgrand.svg')] bg-cover md:bg-contain ">
        

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

      {/* images */}

      {/* footer */}
    </div>
  );
}

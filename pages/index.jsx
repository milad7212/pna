import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import History from "../components/History";
import Information from "../components/Information";
import Organizer from "../components/Organizer";
import Roles from "../components/Roles";
import Supporters from "../components/Supporters";

export default function Home() {
  return (
    <div className="py-28 bg-gradient-to-t from-rose-100 to-white-100">
      {/* top header */}

      {/* header */}

      {/* hero slider */}

      {/* about */}
      <About />

      {/* information */}
      <Information />

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

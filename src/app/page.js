"use client";
import { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
import Abc from "@/components/headingtextdemo/Textdemo";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import Model from "@/components/threeDModel/Model";
import Lenis from "@studio-freight/lenis";
import FourCards from "@/components/fourcards/FourCards";
import SixcardItem from "@/components/sixcarditem/SixcardItem";
import Slider from "@/components/slider/Slider";
import AccordionItem from "@/components/faqaccordian/faqdata";
import ThreedSliderFirst from "@/components/threedfirstpage/page";
import SixcardItemMobile from "@/components/sixcardmobile/sixcardmobile";
import VideoSec from "@/components/videosection/page";
import Preloader from "@/components/preloader/index";
import { AnimatePresence } from "framer-motion";

// const HomeBanner = dynamic(() => import("@/components/threedfirstpage/page"));
export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isCounter, setCounter] = useState(0);
  useEffect(() => {
    document.title =
      "Microsoft Power Bi Consulting Company - Business Intelligence &amp; Data Analytics Consulting Firm Australia - Power Bi Reporting &amp; Data Visualisation Services - Bi Implementation Consultants - Financial Power Bi Dashboard - KGM Group";

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical", // vertical or horizontal
      gestureDirection: "vertical", // vertical or horizontal
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // const handleLoad = (loading) => {
  //   console.log("data", loading);
  //   setIsLoading(loading);
  // };

  // const handleCounter = (data) => {
  //   console.log("cc", data);
  //   setCounter(data);
  // };

  return (
    <>
      <AnimatePresence mode="wait">
        { <Preloader />}
      </AnimatePresence>
      {/* <HomeBanner loadImage={handleLoad} counter={handleCounter} /> */}
      <div data-scroll-container>
        <ThreedSliderFirst />
        <Model />
        <VideoSec />
        <Abc />
        <PortfolioCard />
        <FourCards />
        <div className="SixcardMainContainer">
          <SixcardItem />
        </div>
        <div className="SixcardMainContainerMobile">
          <SixcardItemMobile />
        </div>
        <Slider />
        <AccordionItem />
        {/* <p>Header</p> */}
      </div>
    </>
  );
}

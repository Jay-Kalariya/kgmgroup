
"use client";
import { useState, useEffect } from "react";
import Abc from "@/components/headingtextdemo/Textdemo";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import Model from "@/components/threeDModel/Model";
import Lenis from "@studio-freight/lenis";
import FourCards from "@/components/fourcards/FourCards";
import SixcardItem from "@/components/sixcarditem/SixcardItem";
import Slider from "@/components/slider/Slider";
import AccordionItem from "@/components/faqaccordian/faqdata";
import Footer from "@/components/footer/footer";
import Webgl from "./webgl/page";
export default function Home() {
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

  return (
    <div data-scroll-container>
      {/* <Webgl /> */}
      <Model />
      <Abc />
      <PortfolioCard />
      <FourCards />
      <SixcardItem />
      <Slider />
      <AccordionItem />
      <Footer />
      {/* <p>Header</p> */}
    </div>
  );
}
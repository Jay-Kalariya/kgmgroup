"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/components/bigTextHeading/BigText.module.css";

gsap.registerPlugin(ScrollTrigger);

const BigText = ({ texts }) => {
  const textRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((text) => {
      gsap.fromTo(
        text,
        { x: "30%" },
        {
          backgroundSize: "100%",
          ease: "power1.inOut",
          x: "0%", 
          scrollTrigger: {
            trigger: text,
            start: "center 80%",
            end: "center 40%",
            scrub: true,
            // markers: true,
            onLeaveBack: () => {
              gsap.set(text, { x: "30%" }); // Reset to initial position when scrolling back up
            },
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.BigTextContainer}>
      {texts.map((text, index) => (
        <h2
          className={styles.text}
          key={index}
          ref={(el) => (textRefs.current[index] = el)}
        >
          {text}
        </h2>
      ))}
    </div>
  );
};
BigText.defaultProps = {
  texts: [],
};

export default BigText;

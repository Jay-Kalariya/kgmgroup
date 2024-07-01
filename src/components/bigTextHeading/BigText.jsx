"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import styles from "@/components/bigTextHeading/BigText.module.css";

gsap.registerPlugin(ScrollTrigger);

const BigText = ({ texts ,xDirection , X1Direction  ,X2Direction}) => {
  const textRefs = useRef([]);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      direction: 'vertical',
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    textRefs.current.forEach((text) => {
      gsap.fromTo(
        text,
        { x: xDirection },
        {
          backgroundSize: "100%",
          ease: "power1.inOut",
          x: X1Direction,
          scrollTrigger: {
            trigger: text,    
            start: "center 100%",
            end: "center 50%",
            scrub: 1.5,
            // markers: true,
            onLeaveBack: () => {
              gsap.set(text, { x: X2Direction}); // Reset to initial position when scrolling back up
            },
          },
        }
      );
    });

    return () => {
      lenis.destroy();
    };
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

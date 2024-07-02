"use client";
import BigText from "../bigTextHeading/BigText";
import styles from "./howwework.module.css";
import HowWeWorkCard from "./howwewordCard/card";
import Button from "@/components/Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Howwework() {
  const texts = ["Who", "We Are" ];
  useEffect(() => {
    gsap.fromTo(
      `.${styles.cardContent}`,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: `.${styles.cardContent}`,
          start: "top 80%",
          toggleActions: "play none none none",
          scrub:true,
          onLeaveBack: () =>{
            gsap.set(`${styles.cardContent} ` , {y : 50})
          }
        },
      }
    );

    gsap.fromTo(
      `.${styles.sideCard}`,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: `.${styles.sideCard}`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      `.${styles.button}`,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 10,
        scrollTrigger: {
          trigger: `.${styles.button}`,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <BigText texts={texts} />
        </div>
        <div className={styles.cardContent}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            officiis explicabo, recusandae eligendi qui, ducimus doloremque
          </p>
        </div>
        <div className={styles.sideCard}>
          <p className={styles.cardText}>
            We roar with creativity, staying updated with the latest tech to
            make your brand a formidable force in the digital wilderness and
            deliver exceptional website and app experiences
          </p>
          <div className={styles.button}>
            <Button text={"Learn more"} />
          </div>
        </div>
        <div>
          <HowWeWorkCard />
        </div>
      </div>
    </div>
  );
}

export default Howwework;

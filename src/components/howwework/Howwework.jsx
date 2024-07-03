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
  const text1 = ["Who"];
  const text2 = ["We Are"];
  return (
    <div className={styles.cardMain}>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <BigText
            texts={text1}
            xDirection={"-40px"}
            X1Direction={"100px"}
            X2Direction={"100%"}
          />
          <BigText
            texts={text2}
            xDirection={"200px"}
            X1Direction={"100px"}
            X2Direction={"100%"}
          />
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

"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from './cards.module.css';
import BigText from "../bigTextHeading/BigText";

const AchievedBlock = ({xDirection, RotateDirection, numberOne, numberTwo, category, blockClass }) => {
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: xDirection,
        rotate: RotateDirection,
      },
      {
        x: 0,
        rotate: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={imageRef} className={`${styles.trHomeAchievedBlock} ${blockClass}`}>
      <div ref={cardRef} className={styles.trHomeAchievedBlockWrapper}>
        <div className={`${styles.trHomeAchievedBlockWrapperLeft} ${styles.trHomeAchievedNumber}`}>
          <div className={styles.trHomeAchievedNumberOne}>       
            {numberOne}<span className={styles.sup}>+</span>
          </div>          
          <div className={styles.trHomeAchievedNumberTwo}>
            {numberTwo}<span className={styles.sup}>+</span>
          </div>
        </div>
        <div className={`${styles.trHomeAchievedBlockWrapperRight} ${styles.trHomeAchievedCategory}`}>
          {category}
        </div>
      </div>
    </div>
  );
};

const FourCards = () => {
  const texts = ['WHO',];
  const texts1 = ['WE ARE'];
  return (
    <section className={styles.trSection}>
       <div className={styles.BigTextHeadingInner}>
      <BigText texts={texts} xDirection={"-40px"} X1Direction={"100px"} X2Direction={"100%"}/>
      <BigText texts={texts1} xDirection={"200px"} X1Direction={"100px"} X2Direction={"100%"}/>

    </div>
      <div className={styles.trHomeAchievedContainer}>
        <AchievedBlock xDirection={"-300"} RotateDirection={"-40"} numberOne="50" numberTwo="50" category="awards & recognition" blockClass={styles.trHomeAchievedBlock1} />
        <AchievedBlock xDirection={"300"} RotateDirection={"40"} numberOne="900" numberTwo="900" category="projects completed" blockClass={styles.trHomeAchievedBlock2} />
        <AchievedBlock xDirection={"-300"} RotateDirection={"-40"} numberOne="20" numberTwo="20" category="creative minds" blockClass={styles.trHomeAchievedBlock3} />
        <AchievedBlock xDirection={"300"} RotateDirection={"40"} numberOne="20" numberTwo="20" category="years of experience" blockClass={styles.trHomeAchievedBlock4} />
      </div>
    </section>
  );
};

export default FourCards;

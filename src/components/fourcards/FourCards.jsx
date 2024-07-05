// components/AchievedBlock.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./cards.module.css";

const AchievedBlock = ({ numberOne, numberTwo, category, blockClass }) => {
  const numberOneRef = useRef(null);
  const numberTwoRef = useRef(null);
  const blockRef = useRef(null);

  useEffect(() => {
    const animateNumber = (ref) => {
      const chars = ref.current.textContent
        .split("")
        .map((char) => `<span class="${styles.char}">${char}</span>`)
        .join("");
      ref.current.innerHTML = chars;
    };

    animateNumber(numberOneRef);
    animateNumber(numberTwoRef);

    const numberOneChars = numberOneRef.current.querySelectorAll(
      `.${styles.char}`
    );
    const numberTwoChars = numberTwoRef.current.querySelectorAll(
      `.${styles.char}`
    );

    const t1 = gsap.timeline({ paused: true });

    t1.from(numberOneChars, {
      y: "100%",
      ease: "power4.out",
      duration: 0.8,
      stagger: 0.05,
    }).to(numberTwoChars, {
      y: "-100%",
      ease: "power4.out",
      duration: 0.8,
      stagger: 0.05,
    }, "-=0.8"); // overlap with the previous animation

    const handleMouseEnter = () => {
      t1.play();
    };

    const handleMouseLeave = () => {
      t1.reverse();
    };

    blockRef.current.addEventListener("mouseenter", handleMouseEnter);
    blockRef.current.addEventListener("mouseleave", handleMouseLeave);

  }, []);

  return (
    <div
      ref={blockRef}
      className={`${styles.trHomeAchievedBlock} ${blockClass}`}
    >
      <div className={styles.trHomeAchievedBlockWrapper}>
        <div
          className={`${styles.trHomeAchievedBlockWrapperLeft} ${styles.trHomeAchievedNumber}`}
        >
          <div className={styles.trHomeAchievedNumberOne} ref={numberOneRef}>
            {numberOne}
            <span className={styles.sup}>+</span>
          </div>
          <div className={styles.trHomeAchievedNumberTwo} ref={numberTwoRef}>
            {numberTwo}
            <span className={styles.sup}>+</span>
          </div>
        </div>
        <div
          className={`${styles.trHomeAchievedBlockWrapperRight} ${styles.trHomeAchievedCategory}`}
        >
          {category}
        </div>
      </div>
    </div>
  );
};

const FourCards = () => {
  return (
    <section className={styles.trSection}>
      <div className={styles.trHomeAchievedContainer}>
        <AchievedBlock
          numberOne="50"
          numberTwo="50"
          category="awards & recognition"
          blockClass={styles.trHomeAchievedBlock1}
        />
        <AchievedBlock
          numberOne="900"
          numberTwo="900"
          category="projects completed"
          blockClass={styles.trHomeAchievedBlock2}
        />
        <AchievedBlock
          numberOne="20"
          numberTwo="20"
          category="creative minds"
          blockClass={styles.trHomeAchievedBlock3}
        />
        <AchievedBlock
          numberOne="20"
          numberTwo="20"
          category="years of experience"
          blockClass={styles.trHomeAchievedBlock4}
        />
      </div>
    </section>
  );
};

export default FourCards;

"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from './cards.module.css';
import BigText from "../bigTextHeading/BigText";

const AchievedBlock = ({ xDirection, RotateDirection, numberOne, numberTwo, category, blockClass }) => {
  const numberOneRef = useRef(null);
  const numberTwoRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Function to animate numbers
    const animateNumber = (refs) => {
      refs.forEach((ref) => {
        const chars = ref.current.textContent
          .split("")
          .map((char) => `<span class="${styles.char}">${char}</span>`)
          .join("");
        ref.current.innerHTML = chars;
      });
    };

    animateNumber([numberOneRef, numberTwoRef]);

    const numberOneChars = numberOneRef.current.querySelectorAll(`.${styles.char}`);
    const numberTwoChars = numberTwoRef.current.querySelectorAll(`.${styles.char}`);

    const t1 = gsap.timeline({ paused: true });

    t1.from(numberOneChars, {
      y: "100%",
      ease: "power4.out",
      duration: 0.8,
      stagger: 0.05,
    }).to(
      numberTwoChars,
      {
        y: "-100%",
        ease: "power4.out",
        duration: 0.8,
        stagger: 0.05,
      },
      "-=0.8"
    ); // overlap with the previous animation

    const handleMouseEnter = () => {
      t1.play();
    };

    const handleMouseLeave = () => {
      t1.reverse();
    };

    imageRef.current.addEventListener("mouseenter", handleMouseEnter);
    imageRef.current.addEventListener("mouseleave", handleMouseLeave);

    // GSAP animation for the card
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

  }, [xDirection, RotateDirection]);

  return (
    <div ref={imageRef} className={`${styles.trHomeAchievedBlock} ${blockClass}`}>
      <div ref={cardRef} className={styles.trHomeAchievedBlockWrapper}>
        <div className={`${styles.trHomeAchievedBlockWrapperLeft} ${styles.trHomeAchievedNumber}`}>
          <div className={styles.trHomeAchievedNumberOne} ref={numberOneRef}>
            {numberOne}
            <span className={styles.sup}>+</span>
          </div>
          <div className={styles.trHomeAchievedNumberTwo} ref={numberTwoRef}>
           <p className={styles.charblock}> {numberTwo}</p>
            <span className={styles.sup}>+</span>
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
  const texts = ['WHO'];
  const texts1 = ['WE ARE'];
  return (
    <section className={styles.trSection}>
      <div className={styles.BigTextHeadingInner}>
        <BigText texts={texts} xDirection={"-40px"} X1Direction={"100px"} X2Direction={"100%"} />
        <BigText texts={texts1} xDirection={"200px"} X1Direction={"100px"} X2Direction={"100%"} />
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

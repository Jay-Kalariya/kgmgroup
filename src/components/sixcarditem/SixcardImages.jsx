import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./SixcardItem.module.css";

const SixcardImages = ({ xDirection, RotateDirection, ImageSrc }) => {
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  useEffect(() => {
    // GSAP animation for the card
    gsap.fromTo(
      imageRef.current,
      {
        x: 0,
        rotate: 0,
      },
      {
        x: xDirection,
        rotate: RotateDirection,
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
    <section ref={imageRef} className={styles.dribbbleSection}>
      <div ref={cardRef} className={styles.container}>
        {/* <div className={styles.posts}> */}
          <div className={styles.post}>
            <Image
              alt="Trionn"
              data-nimg="1"
              style={{ color: "transparent" }}
              src={ImageSrc}
            />
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default SixcardImages;
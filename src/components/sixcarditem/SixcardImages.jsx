import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./SixcardItem.module.css";

const SixcardImages = ({PaddingImg, xDirection, RotateDirection, ImageSrc , scrollTriggerConfig, scrollTriggerConfigend}) => {
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
        duration: 0.8,
        scrollTrigger: {
          trigger: cardRef.current,
          start: scrollTriggerConfig,
          end: scrollTriggerConfigend,
          scrub: 1,
        },
      }
    );
  }, [xDirection, RotateDirection, scrollTriggerConfig , scrollTriggerConfigend]);
  return (
    <section ref={imageRef} className={styles.dribbbleSection} style={{ margin: PaddingImg }}>
      <div ref={cardRef} className={styles.container}>
        {/* <div className={styles.posts}> */}
          <div className={styles.post} >
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

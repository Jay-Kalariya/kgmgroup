
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import styles from './SixcardItem.module.css';

// Import images
import dribbble1 from '../../images/sixcards1.jpg';
import dribbble2 from '../../images/sixcards2.jpg';
import dribbble3 from '../../images/sixcards3.jpg';
import dribbble4 from '../../images/sixcards4.jpg';
import dribbble5 from '../../images/sixcards5.jpg';
import dribbble6 from '../../images/sixcards6.jpg';

const images = [dribbble1, dribbble2, dribbble3, dribbble4, dribbble5, dribbble6];

const SixcardItem = ({ xDirection, RotateDirection }) => {
  const imageRef = useRef(null);
  const cardRef = useRef(null);
  useEffect(() => {
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
    <section ref={imageRef} className={styles.dribbbleSection} >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div ref={cardRef} className="">
            <Image
              alt="Trionn"
              width="200"
              height="60"
              data-nimg="1"
              className="fadeUp"
              style={{ color: 'transparent' }}
              src={dribbble1}
            />
          </div>
          <div className={`${styles.sectionTitle} ${styles.container}`}>
            <div className={styles.sectionTitleLeft}>
              <h4 className="headingAnimation">
                Like a lions roar echoing through
                the jungle a hint of our creative
                minds emerges
              </h4>
            </div>
          </div>
          <div className="fadeUp">
            <a
              className="button magnetic cursorHoverable cursorHoverablePlay"
              aria-label="View Dribbble"
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/trionndesign"
            >
              View Dribbble
              <span className="buttonBackground">View Dribbble</span>
            </a>
          </div>
        </div>
        <div className={styles.posts}>
          {images.map((image, index) => (
            <div key={index} className={`${styles.post} ${styles[`post${index + 1}`]}`}>
              <Image
                alt="Trionn"
                width="600"
                height="420"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixcardItem;

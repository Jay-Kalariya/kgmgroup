
import React from 'react';
import Image from 'next/image';
import styles from './SixcardItem.module.css';

// Import images
import dribbble1 from '../../images/img1.webp';
import dribbble2 from '../../images/img1.webp';
import dribbble3 from '../../images/img1.webp';
import dribbble4 from '../../images/img1.webp';
import dribbble5 from '../../images/img1.webp';
import dribbble6 from '../../images/img1.webp';

const images = [dribbble1, dribbble2, dribbble3, dribbble4, dribbble5, dribbble6];

const SixcardItem = () => {
  return (
    <section className={styles.dribbbleSection} >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className="float-none inline-block m-auto z-1">
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
              className="button magnetic cursorHoverable cursorHoverablePlay z-2 float-none inline-block m-auto z-1"
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

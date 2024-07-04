import React from 'react';
import Image from 'next/image';
import styles from './SixcardItem.module.css';

import dribbble1 from '../../images/img1.webp';
import dribbble2 from '../../images/img3.webp';
import dribbble3 from '../../images/img1.webp';
import dribbble4 from '../../images/img3.webp';
import dribbble5 from '../../images/img1.webp';
import dribbble6 from '../../images/img3.webp';

const images = [dribbble1, dribbble2, dribbble3, dribbble4, dribbble5, dribbble6];

const SixcardItem = () => {
  return (
    <section className={styles.dribbbleSection}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div>
            <Image
              alt="Trionn"
              width="200"
              height="60"
              data-nimg="1"
              style={{ color: 'transparent' }}
              src="/_next/static/media/dribbble.1a51ca99.webp"
            />
          </div>
          <div className={styles.sectionTitle}>
            <h4>
              Like a lion's roar echoing through <br />
              the jungle, a hint of our creative <br />
              minds emerges.
            </h4>
          </div>
          <div>
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
            <div key={index} className={styles.post}>
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

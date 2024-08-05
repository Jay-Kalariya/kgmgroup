// HomeBanner.js
import { useEffect, useRef } from 'react';
import styles from './firstpage.module.css';
import Spline from '@splinetool/react-spline';
import { TweenMax } from 'gsap';

const HomeBanner = ({ loadImage }) => {
  const bigBallRef = useRef(null);
  const smallBallRef = useRef(null);
  const hoverableRefs = useRef([]);

  useEffect(() => {
    const onMouseMove = (e) => {
      TweenMax.to(bigBallRef.current, 0.4, {
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
      TweenMax.to(smallBallRef.current, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7,
      });
    };

    const onMouseHover = () => {
      TweenMax.to(bigBallRef.current, 0.3, { scale: 4 });
    };

    const onMouseHoverOut = () => {
      TweenMax.to(bigBallRef.current, 0.3, { scale: 1 });
    };

    document.body.addEventListener('mousemove', onMouseMove);
    hoverableRefs.current.forEach((element) => {
      element.addEventListener('mouseenter', onMouseHover);
      element.addEventListener('mouseleave', onMouseHoverOut);
    });

    return () => {
      document.body.removeEventListener('mousemove', onMouseMove);
      hoverableRefs.current.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseHover);
        element.removeEventListener('mouseleave', onMouseHoverOut);
      });
    };
  }, []);

  return (
    <div className={styles.Text}>
      <div className={styles.cursor}>
        <div ref={bigBallRef} className={`${styles.cursor__ball} ${styles.cursor__ballbig}`}>
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
        <div ref={smallBallRef} className={`${styles.cursor__ball} ${styles.cursor__ballsmall}`}>
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="0"></circle>
          </svg>
        </div>
      </div>
      <div className={styles.TextInnerModel}>
        <p className={styles.InnerTextModule}>
          Roar Data <br /> Bridge the Gap Between Data and Decision-Making
        </p>
      </div>
      <Spline
        scene="https://prod.spline.design/Qr4-g4dqy2Kpwg1O/scene.splinecode"
        className={styles.Spliendesign}
      />
      <div className={styles.InnerTextfield}>
        <p className={styles.InnerTextfieldOne}>
          We pride ourselves on our ability to craft digital products that not
          only meet but exceed the expectations of our clients. With a wealth of
          experience and expertise in the field of real-time interactive
          dashboard development, we understand how to design user-friendly
          interfaces that captivate and engage audiences.
        </p>
      </div>
      <div className={styles.InnerTextfieldScroll}>
        <p 
         ref={(el) => el && hoverableRefs.current.push(el)}
        className={styles.scrollDown}>scroll down</p>
      </div>
    </div>
  );
};

export default HomeBanner;

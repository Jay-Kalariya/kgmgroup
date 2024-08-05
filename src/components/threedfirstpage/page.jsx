"use client"
import { useEffect, useRef, useState } from 'react';
import styles from "./firstpage.module.css";
// import Spline from '@splinetool/react-spline';
import Spline from "@splinetool/react-spline/next";
const HomeBanner =({loadImage}) =>{
  const [splineLoaded, setSplineLoaded] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      if (typeof loadImage === 'function') {
        loadImage(!splineLoaded); // Notify parent that the component is fully loaded or not
      } else {
        console.error('loadImage prop is not a function');
      }
    } else {
      isMounted.current = true;
    }
  }, [splineLoaded, loadImage]);

  return (
    <div className={styles.Text}>
      <div className={styles.TextInnerModel}>
        <p className={styles.InnerTextModule}>
          Roar Data <br /> Bridge the Gap Between Data and Decision-Making
        </p>  
      </div>
      <Spline
        scene="https://prod.spline.design/Qr4-g4dqy2Kpwg1O/scene.splinecode"
        className={styles.Spliendesign}
        onLoad={() => setSplineLoaded(true)}
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
        <p>Scroll Down</p>
      </div>
    </div>
    
  );
}
// https://prod.spline.design/Qr4-g4dqy2Kpwg1O/scene.splinecode
export default HomeBanner;

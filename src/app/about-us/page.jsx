
"use client"
import { useEffect } from "react";
import AboutUs from "@/components/aboutus/page";
import styles from "@/app/about-us/aboutus.module.css";
import MarqueeFinal from "@/components/marquee_final/page"


const AboutUsMain = () => {
  useEffect(() => {
    document.title =
        "About Us | KGM Group";
});
  // const images1 = [Img1, Img2, Img1, Img2, Img1];

  // const images2 = [Img1, Img2, Img1, Img2, Img1];
  return (
    <>
      <div className={styles.AboutUsContainer}>
        <AboutUs />
        <MarqueeFinal />
        {/* <Marquee_Sec direction="right" images={images1} />
        <Marquee_Sec direction="left" images={images2} /> */}
      </div>
    </>
  );
};
export default AboutUsMain;

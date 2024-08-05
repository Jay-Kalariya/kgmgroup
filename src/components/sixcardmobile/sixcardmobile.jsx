import React from "react";
import Image from "next/image";
import styles from "./sixcardmobile.module.css";
import SixcardImagesMobile from "./sixcardmobileimages";
// Import images
import dribbble1 from "../../ImagesNew/FirstCardOne.jpg";
import dribbble2 from "../../ImagesNew/FirstCardTwo.jpg";
import dribbble3 from "../../ImagesNew/FirstCardThree.jpg";
import dribbble4 from "../../ImagesNew/FirstCardeFour.jpg";
import dribbble5 from "../../ImagesNew/FirstCardFive.jpg";
import dribbble6 from "../../ImagesNew/FirstCardSix.jpg";

const SixcardItemMobile = () => {   
  return (
    <div className={styles.MainContainer}>
      <div className={styles.dribbbleSection}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className="">
              <Image
                alt="Trionn"
                width="200"
                height="60"
                data-nimg="1"
                className="fadeUp"
                style={{ color: "transparent" }}
                src={dribbble1}
              />
            </div>
            <div className={`${styles.sectionTitle} ${styles.container}`}>
              <div className={styles.sectionTitleLeft}>
                <h4 className={styles.headingAnimation}>
                  Like a lions roar echoing through the jungle a hint of our
                  creative minds emerges
                </h4>
              </div>
            </div>
            <div className="fadeUp">
              <a
                className="button magnetic cursorHoverable cursorHoverablePlay"
                href="/about-us"
              >
                View Dribbble
                {/* <span className="buttonBackground">View Dribbble</span> */}
              </a>
            </div>
          </div>
          <div className={styles.posts}>
            {/* 1 */}
            <SixcardImagesMobile
              ImageSrc={dribbble1}
              xDirection={"450"}
              RotateDirection={"0"}
              scrollTriggerConfig={"center bottom"}
              scrollTriggerConfigend={"center"}
              PaddingImg={"0px"}
            />
            {/* 2 */}
            <SixcardImagesMobile
              ImageSrc={dribbble2}
              xDirection={"-750"}
              RotateDirection={"0"}
              scrollTriggerConfig={"center bottom"}
              scrollTriggerConfigend={"center"}
              PaddingImg={"0px"}
            />
            {/* 3 */}
            <SixcardImagesMobile
              ImageSrc={dribbble3}
              xDirection={"750"}    
              RotateDirection={"0"}
              scrollTriggerConfig={"top bottom"}
              scrollTriggerConfigend={"center"}
              PaddingImg={"0px 0px 0px 0px"}
            />
            {/* 4 */}
            <SixcardImagesMobile
              ImageSrc={dribbble4}
              xDirection={"-450"}
              RotateDirection={"0"}
              scrollTriggerConfig={"center bottom"}
              scrollTriggerConfigend={"center"}
              PaddingImg={"0px 0px 0px px"}
            />
            {/* 4 */}
            {/* <SixcardImagesMobile
              ImageSrc={dribbble5}
              xDirection={"-150"}
              RotateDirection={"0"}
              scrollTriggerConfig={"top bottom"}
              scrollTriggerConfigend={"top center"}
              PaddingImg={"0px 0px 0px 0px"}
            />
            <SixcardImagesMobile
              ImageSrc={dribbble6}
              xDirection={"150"}
              RotateDirection={"0"}
              scrollTriggerConfig={"top bottom"}
              scrollTriggerConfigend={"top center"}
              PaddingImg={"0px 0px 0px 0px"}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixcardItemMobile;

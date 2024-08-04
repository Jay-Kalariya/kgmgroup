import React from "react";
import Image from "next/image";
import styles from "./SixcardItem.module.css";
import SixcardImages from "./SixcardImages";
// Import images
import dribbble1 from "../../ImagesNew/FirstCardOne.jpg";
import dribbble2 from "../../ImagesNew/FirstCardTwo.jpg";
import dribbble3 from "../../ImagesNew/FirstCardThree.jpg";
import dribbble4 from "../../ImagesNew/FirstCardeFour.jpg";
import dribbble5 from "../../ImagesNew/FirstCardFive.jpg";
import dribbble6 from "../../ImagesNew/FirstCardSix.jpg";


const SixcardItem = () => {
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
          <SixcardImages
            ImageSrc={dribbble1}
            xDirection={"-450"}
            RotateDirection={"-40"}
            scrollTriggerConfig={"center bottom"}
            scrollTriggerConfigend={"center"}
            PaddingImg={"0px"}
          />
          <SixcardImages
            ImageSrc={dribbble2}
            xDirection={"450"}
            RotateDirection={"40"}
            scrollTriggerConfig={"center bottom"}
            scrollTriggerConfigend={"center"}
            PaddingImg={"0px"}
          />
          {/* 3 */}
          <SixcardImages
            ImageSrc={dribbble3}
            xDirection={"-500"}
            RotateDirection={"-20"}
            scrollTriggerConfig={"top bottom"}
            scrollTriggerConfigend={"top center"}
            PaddingImg={"-100px 0px 0px 0px"}
          />
          <SixcardImages
            ImageSrc={dribbble4}
            xDirection={"500"}
            RotateDirection={"20"}
            scrollTriggerConfig={"top bottom"}
            scrollTriggerConfigend={"top center"}
            PaddingImg={"-100px 0px 0px 0px"}
          />
          {/* 4 */}
          <SixcardImages
            ImageSrc={dribbble5}
            xDirection={"-150"}
            RotateDirection={"-25"}
            scrollTriggerConfig={"top bottom"}
            scrollTriggerConfigend={"top center"}
            PaddingImg={"-180px 0px 0px 0px"}
          />
          <SixcardImages
            ImageSrc={dribbble6}
            xDirection={"150"}
            RotateDirection={"25"}
            scrollTriggerConfig={"top bottom"}
            scrollTriggerConfigend={"top center"}
            PaddingImg={"-180px 0px 0px 0px"}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SixcardItem;

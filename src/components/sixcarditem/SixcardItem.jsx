import React from "react";
import Image from "next/image";
import styles from "./SixcardItem.module.css";
import SixcardImages from "./SixcardImages";
// Import images
import dribbble1 from "../../images/New_Img1.jpg";
import dribbble2 from "../../images/New_Img9.jpg";
import dribbble3 from "../../images/New_Img3.jpg";
import dribbble4 from "../../images/New_Img5.jpg";
import dribbble5 from "../../images/New_Img8.jpg";
import dribbble6 from "../../images/New_Img6.jpg";


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
              target="_blank"
              href="#"
            >
              View Dribbble
              {/* <span className="buttonBackground">View Dribbble</span> */}
            </a>
          </div>
        </div>
        <div className={styles.posts}>
          <SixcardImages
            ImageSrc={dribbble1}
            xDirection={"-300"}
            RotateDirection={"-20"}
          />
          <SixcardImages
            ImageSrc={dribbble2}
            xDirection={"300"}
            RotateDirection={"20"}
          />
          <SixcardImages
            ImageSrc={dribbble3}
            xDirection={"-350"}
            RotateDirection={"-30"}
          />
          <SixcardImages
            ImageSrc={dribbble4}
            xDirection={"350"}
            RotateDirection={"30"}
          />
          <SixcardImages
            ImageSrc={dribbble5}
            xDirection={"-350"}
            RotateDirection={"-30"}
          />
          <SixcardImages
            ImageSrc={dribbble6}
            xDirection={"350"}
            RotateDirection={"30"}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default SixcardItem;

"use client";
import { useState } from "react";
import styles from "@/components/aboutus/aboutus.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import AboutUsImg from "@/images/about_image.jpg";
import { translate } from "../../components/headers/anim"; // Import animations
const AboutUs = () => {
  // const [showFullText, setShowFullText] = useState(false);

  // const toggleText = () => {
  //   setShowFullText(!showFullText);
  // };
  
  const getChars = (text) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={char + index}
        custom={[index * 0.02, (text.length - index) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {char}
      </motion.span>
    ));
  };
  return (
    <div className={styles.AboutUsMainContainer}>
      {/* <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <p className={styles.text1}>Behind the Scenes</p>
      </motion.div> */}
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
      >
        <p className={styles.text1}>
          {getChars("Behind the Scenes")}
        </p>
      </motion.div>
      <div className={styles.AboutImageContainer}>
        <Image src={AboutUsImg} className={styles.AboutUsimg} />
      </div>
      <div className={styles.AboutUsFlex}>
        <div className={styles.MainFlexOne}>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className={styles.TextUpper}
          >
            <p className={styles.text2}>
              <span className={styles.BoldText}>Zaid Hassoneh</span> is the
              Managing Director, bringing with him an unparalleled breadth of
              experience and a commitment to operational excellence. With a
              distinguished career in the FMCG sector, specifically within the
              glass, robotics and pharmaceutical industries, Zaid has held
              pivotal roles such as VP of Operations, Plant Manager, Head of
              Continuous Improvement and Senior Plant Engineer. His expertise
              extends into the realms of operational leadership, lean
              manufacturing, high-speed production, and advanced analytics.
              Recognized as a Power User of Microsoft Power BI, Zaid has crafted
              global tools and dashboards essential for data-driven
              decision-making. His professional tenure, spanning across regions
              like the Asia Pacific, USA, Europe, and the Middle East, offers
              our firm a rich mosaic of global insights and approaches.
            </p>
          </motion.div>
          {/* {!showFullText && ( */}
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className={styles.TextUpperTwo}
          >
            <p className={styles.text2one}>
              Under Zaids leadership, our team is dedicated to fostering close
              collaborations with each client. Recognizing that every business
              has its unique character and challenges, we delve deep to
              understand these nuances, ensuring tailored strategies that align
              perfectly with their goals. Our commitment is not just to identify
              but to amplify the strengths and advantages unique to each
              enterprise.{" "}
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className={styles.TextUpperTwo}
          >
            <p className={styles.text2one}>
              Under Zaids leadership, our team is dedicated to fostering close
              collaborations with each client. Recognizing that every business
              has its unique character and challenges, we delve deep to
              understand these nuances, ensuring tailored strategies that align
              perfectly with their goals. Our commitment is not just to identify
              but to amplify the strengths and advantages unique to each
              enterprise.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
            className={styles.TextUpperTwoSecond}
          >
            <p className={styles.text2one}>
              Our consultants are a blend of academic acumen and real-world
              pragmatism. With advanced degrees in their respective fields
              complemented by at least a decade of hands-on experience, they
              bring an analytic, data-driven, and community-centered approach to
              the table. This blend of theory and practice empowers them to
              devise innovative solutions, perfectly attuned to advancing
              industry standards and refining corporate processes. As a cohesive
              unit, we pledge to bring you the best of both worlds – theoretical
              mastery and practical brilliance.
            </p>
          </motion.div>
          {/* )} */}
          {/* {showFullText && ( */}
          <>
            {/* <div className={styles.MainButton}>
                                <div className={styles.readMoreButtonOuter}>
                                    <span className={styles.readMoreButton} onClick={toggleText}>
                                        Read Less
                                    </span>
                                </div>
                            </div> */}
          </>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

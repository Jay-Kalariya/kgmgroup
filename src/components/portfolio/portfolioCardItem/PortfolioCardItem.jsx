"use client"
import "./portfolioCardItem.css";
import Button from "@/components/Button/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
import Image from "next/image";


const PortfolioCardItem = ({ image }) => {
  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1 1"],
  // });

  // Adjust the tilt effect based on scroll position
  // const tiltProgress = useTransform(scrollYProgress, [0, 1], [-20, 0]);

  // Adjust opacity based on scroll position
  // const opacityProgress = useTransform(scrollYProgress, [0, 0.7, 1], [0, 0.3, 1]);
  return (
    <motion.div
      // ref={ref}
      // style={{
        // x: tiltProgress, // Apply horizontal translation based on scroll
        // rotate: tiltProgress, // Apply tilt effect from left to zero based on scroll
        // opacity: opacityProgress, // Fade in based on scroll
        // transformOrigin: "center center", // Set the transform origin to left for the tilt effect
     
      // }}
      className="portfolioCardItem"
    >
      <div className="portfolioCardItem_wrapper">
        <motion.div
        initial={{
          x: -300,
          rotate: -10,
        }}
        whileInView={{
          x: 0,
          rotate: 0,
          transition: {
            duration: 0.5,
          },
        }}
         className="portfolioCardItem_image">
          <Image src={image} alt="cardItem1" />
        </motion.div>
        <div className="portfolioCardItem_content">
          <div className="portfolioCardItem_heading">
            <h6>Lorem Impsun</h6>
          </div>
          <div className="portfolioCardItem_text">Lorem Impsum</div>
         <Button text={"read more"} />
        </div>
      </div>
    </motion.div>
  );
};
export default PortfolioCardItem;

PortfolioCardItem.propTypes = {
  image: PropTypes.any,
};

"use client"
import "./portfolioCardItem.css";
import Button from "@/components/Button/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";
import { useRef } from "react";
import Image from "next/image";


const PortfolioCardItem = ({ image }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  // Adjust the tilt effect based on scroll position
  const tiltProgress = useTransform(scrollYProgress, [0, 1], [10, 0]);

  // Adjust opacity based on scroll position
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // const tiltProgress = useTransform(scrollYProgress, [0, 1], [0, -10]);
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        rotate: tiltProgress, // Apply tilt effect from left to zero based on scroll
        opacity: opacityProgress, // Fade in based on scroll
        transformOrigin: "left center", // Set the transform origin to left for the tilt effect
     
      }}
      className="portfolioCardItem"
    >
      <div className="portfolioCardItem_wrapper">
        <div className="portfolioCardItem_image">
          <Image src={image} alt="cardItem1" />
        </div>
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

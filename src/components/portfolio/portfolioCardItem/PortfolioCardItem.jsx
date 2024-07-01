"use client";
import "./portfolioCardItem.css";
import { motion } from "framer-motion";
// import Button from "@/components/Button/Button";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import PropTypes from "prop-types";

const PortfolioCardItem = ({ image, heading, text, btn }) => {
  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        x: -300,
        rotate: -10,
      },
      {
        x: 0,
        rotate: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="portfolioCardItem">
      <div className="portfolioCardItem_wrapper">
        <div ref={imageRef} className="portfolioCardItem_image">
          <Image src={image} alt="cardItem1" />
        </div>
        <motion.div
          className="portfolioCardItem_content"
          initial={{
            opacity: 1,
            y: 220,
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
          <div className="portfolioCardItem_heading">
            <h6>{heading}</h6>
          </div>
          <div className="portfolioCardItem_text">{text}</div>
          {/* <Button text={"read more"} /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioCardItem;

PortfolioCardItem.propTypes = {
  image: PropTypes.any,
};

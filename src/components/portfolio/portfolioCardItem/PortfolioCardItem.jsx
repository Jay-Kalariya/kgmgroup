"use client";
import "./portfolioCardItem.css";
import Button from "@/components/Button/Button";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import PropTypes from "prop-types";

const PortfolioCardItem = ({ image }) => {
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
        <div className="portfolioCardItem_content">
          <div className="portfolioCardItem_heading">
            <h6>Lorem Impsun</h6>
          </div>
          <div className="portfolioCardItem_text">Lorem Impsum</div>
          <Button text={"read more"} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardItem;

PortfolioCardItem.propTypes = {
  image: PropTypes.any,
};

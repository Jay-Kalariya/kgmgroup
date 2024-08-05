"use client"
import "./style.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Body from "./Body";
import Footer from "./Footer";
// import image1 from "../../../images/capabilities_accordion_c1_b1.jpg";
// import image2 from "../../../images/capabilities_accordion_c1_b3.jpg";
// import image3 from "../../../images/capabilities_accordion_c2_b1.jpg";
// import NavImage from "./Image";
import PropTypes from "prop-types";

const links = [
  {
    title: "Home",
    href: "/",
    // src: image1,
  },
  {
    title: "About - Us",
    href: "/about-us",
    // src: image2,
  },
  {
    title: "Contact - Us",
    href: "/contact-us",
    // src: image3,
  },
 
];

export default function NavSection({ navLinkHandler }) { 
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      // variants={height}
      style={{ height: "100vh", overflow: "hidden" }}
      initial="initial"
      animate="enter"
      exit="exit"
      className="new_nav"
    >
      <div className="wrapper">
        <div className="container_navbar">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            handleNavLink={navLinkHandler}
          />
          <Footer />
        </div>
        {/* <NavImage
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        /> */}
      </div>
    </motion.div>
  );
}
NavSection.propTypes = {
  navLinkHandler: PropTypes.func,
};

import "./style3.css";
import { translate } from "../../anim";
import { motion } from "framer-motion";
import Image from "next/image";
import Img1 from "@/ImagesNew/dribble.svg";
import Img2 from "@/ImagesNew/instagram.svg";
import Img3 from "@/ImagesNew/linkedin.svg";
import Img4 from "@/ImagesNew/facebook.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer_navbar">
      <ul className="ul">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="EmailText">hello@trionn.com</span>
        </motion.li>
      </ul>
      <ul className="ul">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span className="PhoneText">+91 123456789</span>
        </motion.li>
      </ul>
      <ul className="ul">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="SocialIconMain"
        >
          <span>
            <Link href={"https://dribbble.com/"} target="_blank">
              <Image src={Img1} alt="none" className="SocialIcons" />
            </Link>
          </span>
          <span>
            <Link href={"https://instagram.com/"} target="_blank">
              <Image src={Img2} alt="none" className="SocialIcons" />
            </Link>
          </span>
          <span>
            <Link href={"https://linkedin.com/"} target="_blank">
              <Image src={Img3} alt="none" className="SocialIcons" />
            </Link>
          </span>
          <span>
            <Link href={"https://facebook.com/"} target="_blank">
              <Image src={Img4} alt="none" className="SocialIcons" />
            </Link>
          </span>
        </motion.li>
      </ul>
      {/* <ul className='ul'>
                <motion.li
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    Address:
                </motion.li>
                <motion.li 
                    custom={[0.3, 0]} 
                    variants={translate} initial="initial" 
                    animate="enter" 
                    exit="exit">
                    Testing address for navbar  123456
                </motion.li>
            </ul> */}
    </div>
  );
}

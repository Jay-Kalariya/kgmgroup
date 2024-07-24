import AboutUs from "@/components/aboutus/page";
import Footer from "@/components/footer/footer";
import styles from "@/app/about-us/aboutus.module.css";
import Marquee_Sec from "@/components/marquee/page"
import Image from "next/image";
import Img1 from "@/images/intertek.png";
import Img2 from "@/images/iso.png";

const AboutUsMain = () => {

const images1 = [
    Img1,
   Img2,
   Img1,
   Img2,
   Img1
  ];
  
  const images2 = [
    Img1,
   Img2,
   Img1,
   Img2,
   Img1
  ];
    return (
        <>
        <div className={styles.AboutUsContainer}>
        <AboutUs />
        <Marquee_Sec direction="right" images={images1}/>
        <Marquee_Sec direction="left" images={images2}/>
        <Footer />
        </div>
        </>
    )
}
export default AboutUsMain;
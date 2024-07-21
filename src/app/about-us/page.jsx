import AboutUs from "@/components/aboutus/page";
import Footer from "@/components/footer/footer";
import styles from "@/app/about-us/aboutus.module.css";
import Marquee_Sec from "@/components/marquee/page"
const AboutUsMain = () => {
    return (
        <>
        <div className={styles.AboutUsContainer}>
        <AboutUs />
        <Marquee_Sec direction="right"/>
        <Marquee_Sec direction="left"/>
        <Footer />
        </div>
        </>
    )
}
export default AboutUsMain;
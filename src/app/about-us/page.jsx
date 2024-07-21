import AboutUs from "@/components/aboutus/page";
import Footer from "@/components/footer/footer";
import styles from "@/app/about-us/aboutus.module.css";
const AboutUsMain = () => {
    return (
        <>
        <div className={styles.AboutUsContainer}>
        <AboutUs />
        <Footer />
        </div>
        </>
    )
}
export default AboutUsMain;
"use client"
import BigText from "../bigTextHeading/BigText";
import styles from "@/components/headingtextdemo/Work.module.css";
import Image from "next/image";
import Img2 from "@/images/img1.webp"
const Textdemo = () => {
  const texts = ['RECENT',];
  const texts1 = ['WORK'];

  return (
    <>
    <div className={styles.MainContainer}>
    <div>
      <BigText texts={texts} xDirection={"-40px"} X1Direction={"100px"} X2Direction={"100%"}/>
      <BigText texts={texts1} xDirection={"200px"} X1Direction={"100px"} X2Direction={"100%"}/>
      {/* <p>ssdssdsd</p> */}
    </div>
   {/* cards section start */}
   {/* <div className={styles.threeCards}>
    <div className={styles.threeCardsText}>
     <div>
      <p className={styles.threeCardsTextTitle}>LOFTLOOM</p>
      <p className={styles.threeCardsTextInner}>UI Design, Ui Framework</p>
     </div>
    </div>
    <div className={styles.threeCardsImg}>
      <Image src={Img2} className={styles.CardsImg}/>
    </div>
   </div>

   <div className={styles.threeCards}>
   <div className={styles.threeCardsImg}>
      <Image src={Img2} className={styles.CardsImg}/>
    </div>
    <div className={styles.threeCardsText}>
     <div>
      <p className={styles.threeCardsTextTitle}>LOFTLOOM</p>
      <p className={styles.threeCardsTextInner}>UI Design, Ui Framework</p>
     </div>
    </div>
    
   </div> */}
    </div>
    </>
  );
};

export default Textdemo;

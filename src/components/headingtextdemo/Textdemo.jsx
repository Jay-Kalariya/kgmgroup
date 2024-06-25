import BigText from "../bigTextHeading/BigText";
import styles from "@/components/headingtextdemo/Work.module.css"
const Textdemo = () => {
  const texts = ['RECENT', 'WORK'];

  return (
    <div className={styles.MainContainer}>
      <BigText texts={texts} />
      <p>ssdssdsd</p>
    </div>
  );
};

export default Textdemo;

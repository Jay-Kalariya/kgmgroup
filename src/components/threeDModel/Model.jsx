"use client"
import styles from "./Model.module.css"
// import Spline from '@splinetool/react-spline';
import Spline from '@splinetool/react-spline/next';
function Model() {    
    return(
          <div className={styles.Text}>
            {/* <p>3d Model</p> */}
            <Spline scene="https://prod.spline.design/Kc0U5W-mcKzGoxtk/scene.splinecode" className={styles.Spliendesign}/>
          </div>
    )
};
// https://my.spline.design/untitled-c7fe10b86bd7f6743f8acd38b0abcd58/
// https://prod.spline.design/f022O34znqOzSb5J/scene.splinecode
// https://prod.spline.design/Kc0U5W-mcKzGoxtk/scene.splinecode
export default Model;
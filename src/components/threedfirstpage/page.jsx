"use client"
import styles from "./firstpage.module.css"
// import Spline from '@splinetool/react-spline';
import Spline from '@splinetool/react-spline/next';
function Model() {    
    return(
          <div className={styles.Text}>
            {/* <p>3d Model</p> */}
            <Spline scene=" https://prod.spline.design/XW7C5IMoUjkxHipA/scene.splinecode" className={styles.Spliendesign}/>
          </div>
    )
};

export default Model;
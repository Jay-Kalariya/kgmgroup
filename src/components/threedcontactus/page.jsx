"use client"
import styles from "./contactd.module.css"
import Spline from '@splinetool/react-spline/next';
function Model() {    
    return(
          <div className={styles.Text}>
            {/* <p>3d Model</p> */}
            <Spline scene=" https://prod.spline.design/YWzTYcQYgn6LVLuR/scene.splinecode" className={styles.Spliendesign}/>
          </div>
    )
};
export default Model;
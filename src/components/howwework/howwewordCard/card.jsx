import React from "react";
import styles from "./card.module.css";

function HowWeWorkCard() {  
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p>
              50<sup>+</sup>
            </p>
          </div>
          <div className={styles.cardContent}>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div> 
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p>
              50<sup>+</sup>
            </p>
          </div>
          <div className={styles.cardContent}>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div> 
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p>
              50<sup>+</sup>
            </p>
          </div>
          <div className={styles.cardContent}>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div> 
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <p>
              50<sup>+</sup>
            </p>
          </div>
          <div className={styles.cardContent}>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWeWorkCard;

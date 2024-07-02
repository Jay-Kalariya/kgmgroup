import React from "react";
import styles from "./card.module.css";

function HowWeWorkCard() {
  const cardContent = [
    { header: "50+", content: "Lorem, ipsum." },
    { header: "60+", content: "Dolor sit amet. Dolor sit amet." },
    {
      header: "70+",
      content: "Consectetur adipiscing. Consectetur adipiscing.",
    },
    { header: "80+", content: "Elit sed do. Elit sed do." },
    { header: "90+", content: "Eiusmod tempor. Eiusmod tempor." },
  ];

  return (
    <div className={styles.cardContainer}>
      {cardContent.map((card, index) => (
        <div
          key={index}
          className={`${styles.cardWrapper} ${
            index % 2 === 0 ? styles.leftCard : styles.rightCard
          }`}
        >
          <div className={styles.cardHeader}>
            <p>{card.header}</p>
          </div>
          <div className={styles.cardContent}>
            <p>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HowWeWorkCard;

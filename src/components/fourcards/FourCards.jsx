
import React from 'react';
import styles from './cards.module.css';
// import AnimatedNumber from '../animatednumber/AnimatedNumber';
// import PortfolioCardItem from '../portfolio/portfolioCardItem/PortfolioCardItem';
const AchievedBlock = ({ numberOne, numberTwo, category, blockClass }) => {
  return (
    <div className={`${styles.trHomeAchievedBlock} ${blockClass}`}>
      <div className={styles.trHomeAchievedBlockWrapper}>
        <div className={`${styles.trHomeAchievedBlockWrapperLeft} ${styles.trHomeAchievedNumber}`}>
          <div className={styles.trHomeAchievedNumberOne}>       
            {numberOne}<span className={styles.sup}>+</span>
          </div>          
          <div className={styles.trHomeAchievedNumberTwo}>
            {numberTwo}<span className={styles.sup}>+</span>
          </div>
        </div>
        <div className={`${styles.trHomeAchievedBlockWrapperRight} ${styles.trHomeAchievedCategory}`}>
          {category}
        </div>
      </div>
    </div>
  );
};

const FourCards = () => {
  return (
    <section className={styles.trSection}>
      <div className={styles.trHomeAchievedContainer}>
        <AchievedBlock numberOne="50" numberTwo="50" category="awards & recognition" blockClass={styles.trHomeAchievedBlock1} />
        <AchievedBlock numberOne="900" numberTwo="900" category="projects completed" blockClass={styles.trHomeAchievedBlock2} />
        <AchievedBlock numberOne="20" numberTwo="20" category="creative minds" blockClass={styles.trHomeAchievedBlock3} />
        <AchievedBlock numberOne="20" numberTwo="20" category="years of experience" blockClass={styles.trHomeAchievedBlock4} />
      </div>
    </section>
  );
};

export default FourCards;

import React, { useState } from "react";
import AccordionItem from "./page";
import styles from "./accordian.module.css";

const faqs = [
  {
    id: 1,
    header: "What is KGM Consultancy Group, and what services does it offer?",
    text: `KGM Consultancy Group is a trusted partner for Australia's comprehensive Power BI consulting and business intelligence data analytics solutions. The group is led by industry expert Zaid Hassoneh, specializing in real-time dashboard Power BI solutions tailored to unique business needs.`,
  },
  {
    id: 2,
    header: "How does KGM Group help businesses with analytics management consulting?",
    text: `We assist businesses in transforming raw data into actionable intelligence, focusing on analytics management consulting. The goal is to empower organizations to make informed decisions and drive growth through expertly crafted financial performance dashboards. `,
  },
  {
    id: 3,
    header: "Can you elaborate on the expertise offered in healthcare analytics?",
    text: `The group specializes in healthcare analytics, helping organizations stay ahead in the rapidly evolving healthcare industry. The emphasis is on creating solutions seamlessly integrating into workflows for increased efficiency. `,
  },
  {
    id: 4,
    header: "How does KGM Consultancy Group contribute to informed decision-making in businesses?",
    text: `We empower businesses to confidently make strategic decisions by offering BI analytics solutions. The group's services emphasize elevating data analytics capabilities and providing practical solutions aligning with organizational goals. `,
  },
  {
    id: 5,
    header: "What is the philosophy behind the creation of performance dashboards?",
    text: `The group recognizes the importance of well-designed and effective performance dashboards, focusing on crafting solutions that seamlessly integrate into workflows for a user-friendly experience.`,
  },
  {
    id: 6,
    header: "How does the group personalize solutions for businesses in the digital age?",
    text: `Driven by a passion for helping businesses thrive in the digital age, the group adopts a comprehensive approach to business analytics and consulting. Solutions are tailored to each client's needs, ensuring alignment with organizational goals.`,
  },
];

const FaqData = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive((prevActive) => (prevActive === id ? null : id));
  };

  return (
    <div className={styles.containerFluid}>
            <div>
              <div className={styles.FaqText}>
                <p>FREQUENTLY ASKED QUESTIONS</p>
              </div>
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  active={active}
                  handleToggle={handleToggle}
                  faq={faq}
                />
              ))}
            </div>
          </div>
  );
};

export default FaqData;

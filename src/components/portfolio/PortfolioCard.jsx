import "./portfolioCard.css";
import PortfolioCardItem from "./portfolioCardItem/PortfolioCardItem";
import cardItem1 from "../../ImagesNew/threeCardImg1.jpg";
import cardItem2 from "../../ImagesNew/threeCardImg2.jpg";
import cardItem3 from "../../ImagesNew/threeCardImg3.jpg";
// import cardItem4 from "../../images/portfolioCard_4.png";
// import cardItem5 from "../../images/portfolioCard_5.png";
// import cardItem6 from "../../images/portfolioCard_6.png";

const PortfolioCard = () => {
  return (
    <div className="portfolioCard">
      <div className="portfolioCard_container">
        <div className="portfolioCard_wrapper">
          <PortfolioCardItem Xdirection={"-300"} RotateDirection={"-10"} image={cardItem1} heading={"Stream analytics in real-time"} text={"Know what’s happening now, not just in the past. From factory sensors to social media sources, get access to real-time analytics so you’re always ready to make timely decisions."} />
          <PortfolioCardItem Xdirection={"300"} RotateDirection={"10"} image={cardItem2} heading={"Create amazing data experiences"} text={"KGM provides seamless data integration, modelling, and visualisation tailored to your unique KPIs and branding. Experience swift, AI-enhanced insights tailored to your business inquiries, even in natural conversational language."}/>
          <PortfolioCardItem  Xdirection={"-300"} RotateDirection={"-10"} image={cardItem3} heading={"Make decisions with confidence"} text={"KGM facilitates collaborative data interaction, enabling teams to co-create reports and share insights seamlessly across popular Microsoft Office tools like Microsoft Teams and Excel. We aim to empower every member of your organization to harness data-driven insights for strategic decision-making."}/>
          {/* <PortfolioCardItem image={cardItem4} />
          <PortfolioCardItem image={cardItem5} />
          <PortfolioCardItem image={cardItem6} /> */}
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;

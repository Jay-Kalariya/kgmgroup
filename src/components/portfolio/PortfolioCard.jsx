import "./portfolioCard.css";
import PortfolioCardItem from "./portfolioCardItem/PortfolioCardItem";
import cardItem1 from "../../images/portfolioCard_1.png";
import cardItem2 from "../../images/portfolioCard_2.png";
import cardItem3 from "../../images/portfolioCard_3.png";
import cardItem4 from "../../images/portfolioCard_4.png";
import cardItem5 from "../../images/portfolioCard_5.png";
import cardItem6 from "../../images/portfolioCard_6.png";

const PortfolioCard = () => {
  return (
    <div className="portfolioCard">
      <div className="portfolioCard_container">
        <div className="portfolioCard_wrapper">
          <PortfolioCardItem image={cardItem1} />
          <PortfolioCardItem image={cardItem2} />
          <PortfolioCardItem image={cardItem3} />
          <PortfolioCardItem image={cardItem4} />
          <PortfolioCardItem image={cardItem5} />
          <PortfolioCardItem image={cardItem6} />
        </div>
      </div>
    </div>
  );
};
export default PortfolioCard;

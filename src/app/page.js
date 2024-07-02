// import BigText from "@/components/bigTextHeading/BigText";
import Abc from "@/components/headingtextdemo/Textdemo";
import Howwework from "@/components/howwework/Howwework";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import Model from "@/components/threeDModel/Model";
export default function Home() {
  return (
    <div>
      <Model />
      <Abc />
      <PortfolioCard />
      <Howwework />
      {/* <p>Header</p> */}
    </div>
  );
}

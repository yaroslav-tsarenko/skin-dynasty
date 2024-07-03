import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import "./MarketPage.css";

const MarketPage = () => {
  return (
    <div className="marketpage">
      <Header />
      <Content />
      <Footer
        skinDynastyTransparent1="/skin-dynasty-transparent-1@2x.png"
        sVG="/svg-8.svg"
        sVG1="/svg-9.svg"
        sVG2="/svg-10.svg"
        sVG3="/svg-11.svg"
      />
    </div>
  );
};

export default MarketPage;

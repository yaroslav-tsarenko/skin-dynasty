import Header from "../components/Header";
import Content1 from "../components/Content1";
import PriceChart from "../components/PriceChart";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import "./ItemDescriptionPage.css";

const ItemDescriptionPage = () => {
  return (
    <div className="itemdescriptionpage">
      <Header />
      <section className="main">
        <Content1 />
        <PriceChart />
      </section>
      <FrameComponent2 />
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

export default ItemDescriptionPage;

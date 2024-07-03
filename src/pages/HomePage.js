import Header from "../components/Header";
import HeroInnerContent from "../components/HeroInnerContent";
import Container from "../components/Container";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <section className="hero-content-wrapper">
        <div className="hero-content">
          <HeroInnerContent />
          <Container />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <section className="thumbnail">
        <img
          className="thumbnailjpg-icon"
          loading="lazy"
          alt=""
          src="/thumbnailjpg@2x.png"
        />
      </section>
      <Testimonials />
      <FAQ />
      <Blog />
      <Footer
        skinDynastyTransparent1="/skin-dynasty-transparent-1-1@2x.png"
        sVG="/svg-19.svg"
        sVG1="/svg-20.svg"
        sVG2="/svg-21.svg"
        sVG3="/svg-22.svg"
      />
    </div>
  );
};

export default HomePage;

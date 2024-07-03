import FrameComponent3 from "../components/FrameComponent3";
import CardTypes from "../components/CardTypes";
import CheckoutDetails from "../components/CheckoutDetails";
import Footer from "../components/Footer";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent3 checkout="Your Cart" />
      <section className="gift-cards">
        <div className="cards">
          <CardTypes />
          <CheckoutDetails />
        </div>
      </section>
      <Footer
        skinDynastyTransparent1="/skin-dynasty-transparent-1@2x.png"
        sVG="/svg-19.svg"
        sVG1="/svg-20.svg"
        sVG2="/svg-21.svg"
        sVG3="/svg-22.svg"
      />
    </div>
  );
};

export default CartDetailsPage;

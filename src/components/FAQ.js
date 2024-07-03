import QuestionList from "./QuestionList";
import PropTypes from "prop-types";
import "./FAQ.css";

const FAQ = ({ className = "" }) => {
  return (
    <section className={`f-a-q ${className}`}>
      <h1 className="frequently-asked-questions">Frequently Asked Questions</h1>
      <div className="questions">
        <QuestionList
          heading3HowDoIBuySkins="How do I purchase a game skin?"
          toPurchaseAGameSkinBrowse="To purchase a game skin, browse our collection, select the skin you like, add it to your cart, and proceed to checkout. You will need to log in or create an account to complete your purchase."
        />
        <QuestionList
          heading3HowDoIBuySkins="What payment methods do you accept?"
          toPurchaseAGameSkinBrowse="We accept major credit cards, PayPal, and various other secure payment options to ensure a smooth transaction experience."
        />
        <QuestionList
          heading3HowDoIBuySkins="How do I receive my purchased skins?"
          toPurchaseAGameSkinBrowse="After your payment is confirmed, the skins will be delivered directly to your in-game inventory. You will receive a notification with instructions on how to access your new skins."
        />
        <QuestionList
          heading3HowDoIBuySkins="Can I return or exchange a skin after purchase?"
          toPurchaseAGameSkinBrowse="Due to the digital nature of game skins, all sales are final. However, if you encounter any issues with your purchase, please contact our support team for assistance."
        />
        <QuestionList
          heading3HowDoIBuySkins=" Are the game skins authentic and safe to use?"
          toPurchaseAGameSkinBrowse="Yes, all game skins on our site are 100% authentic and safe to use. We source our skins from reputable suppliers to ensure quality and security."
        />
        <QuestionList
          heading3HowDoIBuySkins="How do I contact customer support?"
          toPurchaseAGameSkinBrowse={`You can contact our customer support team via the "Contact Us" page on our website. We are available 24/7 to assist you with any questions or concerns.`}
        />
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;

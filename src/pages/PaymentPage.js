import Content1 from "../components/Content1";
import ContactInfo from "../components/ContactInfo";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <div className="main">
        <Content1 />
      </div>
      <div className="rectangle-parent">
        <div className="frame-child" />
        <ContactInfo />
      </div>
    </div>
  );
};

export default PaymentPage;

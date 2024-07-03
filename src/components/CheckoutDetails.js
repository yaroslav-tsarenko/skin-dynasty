import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./CheckoutDetails.css";

const CheckoutDetails = ({ className = "" }) => {
  return (
    <div className={`checkout-details3 ${className}`}>
      <div className="checkout-header">
        <Button
          className="header7"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "rgba(250, 250, 250, 0.8)",
            fontSize: "18",
            background: "rgba(19, 181, 203, 0.2)",
            borderRadius: "5px",
            "&:hover": { background: "rgba(19, 181, 203, 0.2)" },
          }}
        >
          Checkout Details
        </Button>
      </div>
      <div className="subtotal-total">
        <div className="values">
          <b className="cart-subtotal1">Cart Subtotal</b>
          <b className="subtotal-value">$360.00</b>
        </div>
      </div>
      <div className="shipping-taxes">
        <div className="taxes">
          <div className="taxes-labels">
            <b className="shipping-handling1">{`Shipping & Handling`}</b>
            <b className="other-taxes1">Other Taxes</b>
          </div>
          <div className="taxes-labels1">
            <b className="b9">$0.00</b>
            <b className="b10">$0.00</b>
          </div>
        </div>
      </div>
      <div className="checkout-details-inner">
        <div className="frame-child" />
      </div>
      <div className="subtotal-total1">
        <div className="grand-total-group">
          <b className="grand-total1">Grand Total</b>
          <b className="b11">$360.00</b>
        </div>
      </div>
    </div>
  );
};

CheckoutDetails.propTypes = {
  className: PropTypes.string,
};

export default CheckoutDetails;

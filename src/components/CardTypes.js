import { Button } from "@mui/material";
import CardRows from "./CardRows";
import PropTypes from "prop-types";
import "./CardTypes.css";

const CardTypes = ({ className = "" }) => {
  return (
    <div className={`card-types ${className}`}>
      <div className="header6">
        <div className="header-child" />
        <div className="product-header">
          <b className="product1">Product</b>
        </div>
        <div className="price-quantity-header">
          <b className="price1">Price</b>
          <b className="quantity1">Quantity</b>
        </div>
        <b className="total">Total</b>
      </div>
      <CardRows
        fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
        discount20OFF="Discount: 20% OFF"
      />
      <CardRows
        fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
        discount20OFF="Worth USD $400"
      />
      <CardRows
        fentyBeauty50OFFGiftCard="Travel GiftCard"
        discount20OFF="Worth USD $400"
      />
      <div className="table-actions">
        <Button
          className="button12"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "rgba(250, 250, 250, 0.8)",
            fontSize: "18",
            borderColor: "rgba(250, 250, 250, 0.8)",
            borderRadius: "4px",
            "&:hover": { borderColor: "rgba(250, 250, 250, 0.8)" },
            width: 134,
            height: 54,
          }}
        >
          Go Back
        </Button>
        <Button
          className="button13"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#13b5cb",
            borderRadius: "4px",
            "&:hover": { background: "#13b5cb" },
            width: 143,
            height: 54,
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

CardTypes.propTypes = {
  className: PropTypes.string,
};

export default CardTypes;

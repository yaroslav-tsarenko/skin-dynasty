import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent3 checkout="Checkout" />
      <section className="checkoutpage-inner">
        <form className="frame-parent">
          <div className="billing-container-parent">
            <div className="billing-container">
              <h2 className="checkout">Checkout</h2>
              <TextField
                className="header"
                placeholder="Billing Details"
                variant="outlined"
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "54px",
                    backgroundColor: "rgba(19, 181, 203, 0.2)",
                    borderRadius: "5px",
                    fontSize: "18px",
                  },
                  "& .MuiInputBase-input": {
                    color: "rgba(250, 250, 250, 0.8)",
                  },
                }}
              />
              <div className="form-field-block">
                <div className="row-1">
                  <TextField
                    className="block-1"
                    placeholder="First Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#b6b6b6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#1c1c1c",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(250, 250, 250, 0.8)",
                      },
                    }}
                  />
                  <TextField
                    className="block-2"
                    placeholder="Last Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#b6b6b6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#1c1c1c",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(250, 250, 250, 0.8)",
                      },
                    }}
                  />
                </div>
                <div className="row-2">
                  <TextField
                    className="block-11"
                    placeholder="Company Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#b6b6b6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#1c1c1c",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(250, 250, 250, 0.8)",
                      },
                    }}
                  />
                  <div className="block-21">
                    <b className="country">Country</b>
                    <img className="icon" alt="" src="/icon1.svg" />
                  </div>
                </div>
                <TextField
                  className="row-3"
                  placeholder="Street Address"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#1c1c1c",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": {
                      color: "rgba(250, 250, 250, 0.8)",
                    },
                  }}
                />
                <TextField
                  className="block-22"
                  placeholder="Apartment / Suite / Unit / etc. (Optional)"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#1c1c1c",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": {
                      color: "rgba(250, 250, 250, 0.8)",
                    },
                  }}
                />
                <TextField
                  className="row-4"
                  placeholder="Town / City"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#1c1c1c",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": {
                      color: "rgba(250, 250, 250, 0.8)",
                    },
                  }}
                />
                <TextField
                  className="block-23"
                  placeholder="Email Address"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#b6b6b6" },
                    "& .MuiInputBase-root": {
                      height: "50px",
                      backgroundColor: "#1c1c1c",
                      borderRadius: "5px",
                      fontSize: "18px",
                    },
                    "& .MuiInputBase-input": {
                      color: "rgba(250, 250, 250, 0.8)",
                    },
                  }}
                />
                <div className="row-5">
                  <TextField
                    className="block-12"
                    placeholder="ZIP"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#b6b6b6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#1c1c1c",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(250, 250, 250, 0.8)",
                      },
                    }}
                  />
                  <TextField
                    className="block-24"
                    placeholder="Phone"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#b6b6b6" },
                      "& .MuiInputBase-root": {
                        height: "50px",
                        backgroundColor: "#1c1c1c",
                        borderRadius: "5px",
                        fontSize: "18px",
                      },
                      "& .MuiInputBase-input": {
                        color: "rgba(250, 250, 250, 0.8)",
                      },
                    }}
                  />
                </div>
              </div>
              <div className="billing-container-child" />
              <div className="billing-header">
                <Button
                  className="button"
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#5a5a5a",
                    fontSize: "16",
                    borderColor: "#b6b6b6",
                    borderRadius: "4px",
                    "&:hover": { borderColor: "#b6b6b6" },
                    width: 100,
                    height: 54,
                  }}
                >
                  Back
                </Button>
                <Button
                  className="button1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#13b5cb",
                    borderRadius: "4px",
                    "&:hover": { background: "#13b5cb" },
                    width: 139,
                    height: 54,
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
            <div className="checkout-details-parent">
              <div className="checkout-details">
                <Button
                  className="header1"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "rgba(250, 250, 250, 0.8)",
                    fontSize: "18",
                    background: "rgba(19, 181, 203, 0.2)",
                    borderRadius: "5px",
                    "&:hover": { background: "rgba(19, 181, 203, 0.2)" },
                    height: 54,
                  }}
                >
                  Checkout Details
                </Button>
                <div className="cart-subtotal-parent">
                  <b className="cart-subtotal">Cart Subtotal</b>
                  <b className="details-values">$360.00</b>
                </div>
                <div className="shipping-handling-parent">
                  <b className="shipping-handling">{`Shipping & Handling`}</b>
                  <b className="b">$0.00</b>
                </div>
                <div className="other-taxes-parent">
                  <b className="other-taxes">Other Taxes</b>
                  <b className="b1">$0.00</b>
                </div>
                <div className="checkout-details-child" />
                <div className="grand-total-parent">
                  <b className="grand-total">Grand Total</b>
                  <b className="b2">$360.00</b>
                </div>
              </div>
              <div className="transfer-options">
                <Button
                  className="header2"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "rgba(250, 250, 250, 0.8)",
                    fontSize: "18",
                    background: "rgba(19, 181, 203, 0.2)",
                    borderRadius: "5px",
                    "&:hover": { background: "rgba(19, 181, 203, 0.2)" },
                    height: 54,
                  }}
                >
                  Transfer Options
                </Button>
                <div className="checkout-details1">
                  <div className="logos-block">
                    <div className="block-13">
                      <div className="logo-block">
                        <img
                          className="image-1-icon"
                          loading="lazy"
                          alt=""
                          src="/image-12@2x.png"
                        />
                      </div>
                      <b className="bank-transfer">
                        <p className="bank">Bank</p>
                        <p className="transfer">Transfer</p>
                      </b>
                    </div>
                    <div className="block-25">
                      <div className="logo-block1">
                        <img
                          className="image-2-icon"
                          loading="lazy"
                          alt=""
                          src="/image-22@2x.png"
                        />
                      </div>
                      <b className="google-pay">
                        <p className="google">Google</p>
                        <p className="pay">Pay</p>
                      </b>
                    </div>
                  </div>
                  <div className="transfer-blocks">
                    <div className="block-3">
                      <div className="logo-block2">
                        <img
                          className="image-3-icon"
                          loading="lazy"
                          alt=""
                          src="/image-32@2x.png"
                        />
                      </div>
                      <b className="apple-pay">
                        <p className="apple">Apple</p>
                        <p className="pay1">Pay</p>
                      </b>
                    </div>
                    <div className="block-4">
                      <div className="logo-block3">
                        <img
                          className="image-4-icon"
                          loading="lazy"
                          alt=""
                          src="/image-42@2x.png"
                        />
                      </div>
                      <b className="paypal">PayPal</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout1">
            <Button
              className="header3"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "rgba(250, 250, 250, 0.8)",
                fontSize: "18",
                background: "rgba(19, 181, 203, 0.2)",
                borderRadius: "5px",
                "&:hover": { background: "rgba(19, 181, 203, 0.2)" },
                height: 54,
              }}
            >
              Checkout
            </Button>
            <div className="checkout-details2">
              <div className="your-personal-data">
                Your Personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our product
              </div>
              <Button
                className="button2"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#13b5cb",
                  borderRadius: "4px",
                  "&:hover": { background: "#13b5cb" },
                  height: 54,
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </form>
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

export default CheckoutPage;

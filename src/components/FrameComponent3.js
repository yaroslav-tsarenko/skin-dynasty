import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "", checkout }) => {
  return (
    <section className={`header-desktop-parent ${className}`}>
      <div className="header-desktop">
        <header className="ticker">
          <div className="get-100-off-container">
            <span className="get-100-off">{`Get $100 off on purchases over $30. `}</span>
            <span className="add-voucher">Add Voucher</span>
          </div>
        </header>
        <div className="header5">
          <div className="container98">
            <div className="link14">
              <img
                className="skin-dynasty-transparent-12"
                loading="lazy"
                alt=""
                src="/skin-dynasty-transparent-1@2x.png"
              />
            </div>
            <div className="nav-main-navigation1">
              <div className="list8">
                <div className="item14">
                  <div className="link15">
                    <div className="market1">Market</div>
                  </div>
                </div>
                <div className="item15">
                  <div className="link16">
                    <div className="support1">Support</div>
                  </div>
                </div>
                <div className="item16">
                  <div className="link17">
                    <div className="blog2">Blog</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="link18"
            startIcon={<img width="20px" height="20px" src="/img.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "14",
              background: "#13b5cb",
              borderRadius: "6px",
              "&:hover": { background: "#13b5cb" },
              width: 182,
            }}
          >
            Sign in via Steam
          </Button>
        </div>
      </div>
      <div className="frame-wrapper">
        <div className="frame-container">
          <div className="checkout-wrapper">
            <h1 className="checkout2">{checkout}</h1>
          </div>
          <b className="view-or-edit">View or edit your cart before checkout</b>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  checkout: PropTypes.string,
};

export default FrameComponent3;

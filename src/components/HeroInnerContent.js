import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./HeroInnerContent.css";

const HeroInnerContent = ({ className = "" }) => {
  return (
    <div className={`hero-inner-content ${className}`}>
      <div className="container1">
        <div className="hero-description">
          <div className="container2">
            <img
              className="cs2gakqjiwypng-icon"
              alt=""
              src="/cs2gakqjiwypng@2x.png"
            />
            <img
              className="image-icon"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <img
              className="tf2b-upq5zdpng-icon"
              loading="lazy"
              alt=""
              src="/tf2bupq5zdpng@2x.png"
            />
          </div>
          <div className="container3">
            <h1 className="buy-sell">{`Buy  & Sell CS2 Skins`}</h1>
          </div>
          <div className="hero-heading">
            <div className="trade-skins-and">
              Trade skins and buy Steam marketplace items on the best and
              fairest skin trading platform. Trusted by hundreds of thousands.
            </div>
          </div>
        </div>
        <div className="container4">
          <Button
            className="btn"
            endIcon={<img width="20px" height="20px" src="/frame.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#061a17",
              fontSize: "16",
              background: "#13b5cb",
              borderRadius: "8px",
              "&:hover": { background: "#13b5cb" },
              height: 58,
            }}
          >
            LET'S GET STARTED
          </Button>
          <div className="link5">
            <div className="container5">
              <div className="strong">
                <div className="excellent">Excellent</div>
              </div>
              <img className="svg-icon" loading="lazy" alt="" src="/svg.svg" />
            </div>
            <div className="container6">
              <div className="container7">
                <div className="strong-47-container">
                  <span>4.7</span>
                  <span className="out-of-5"> out of 5 rated on</span>
                </div>
              </div>
              <img className="svg-icon1" alt="" src="/svg-1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container8">
        <div className="pngegg-7-1-parent">
          <img
            className="pngegg-7-1"
            loading="lazy"
            alt=""
            src="/pngegg-7-1@2x.png"
          />
          <img className="pngegg-9-1" alt="" src="/pngegg-9-1@2x.png" />
          <img
            className="pngegg-10-1"
            loading="lazy"
            alt=""
            src="/pngegg-10-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

HeroInnerContent.propTypes = {
  className: PropTypes.string,
};

export default HeroInnerContent;

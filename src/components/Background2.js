import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Background2.css";

const Background2 = ({ className = "", image }) => {
  return (
    <div className={`background5 ${className}`}>
      <img className="image-icon12" alt="" src={image} />
      <div className="container41">
        <div className="container42">
          <b className="fn-phase-2">
            <span>FN · </span>
            <span className="phase-2">Phase 2</span>
          </b>
        </div>
        <div className="container43">
          <div className="container44">
            <b className="remove-buttons">$376.18</b>
          </div>
        </div>
        <Button
          className="cart-buttons"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#13b5cb",
            borderRadius: "4px",
            "&:hover": { background: "#13b5cb" },
            height: 37,
          }}
        >
          Add to cart
        </Button>
      </div>
      <div className="container45">
        <div className="margin">
          <div className="x3">x3</div>
        </div>
        <div className="container46">
          <div className="container47">
            <img className="icon1" loading="lazy" alt="" src="/icon-4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Background2.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default Background2;

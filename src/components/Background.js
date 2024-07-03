import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background7 ${className}`}>
      <img className="image-icon14" alt="" src="/image@2x.png" />
      <div className="container54">
        <div className="container55">
          <b className="fn-phase-22">
            <span>
              <span>FN · </span>
              <span className="phase-22">Phase 2</span>
            </span>
          </b>
        </div>
        <div className="container56">
          <div className="container57">
            <b className="b5">$376.18</b>
          </div>
        </div>
        <Button
          className="container-item"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#ca5a2a",
            borderRadius: "4px",
            "&:hover": { background: "#ca5a2a" },
            height: 37,
          }}
        >
          Add to cart
        </Button>
      </div>
      <div className="container58">
        <div className="margin2">
          <div className="x32">x3</div>
        </div>
        <div className="container59">
          <img className="container-icon1" />
        </div>
      </div>
    </div>
  );
};

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;

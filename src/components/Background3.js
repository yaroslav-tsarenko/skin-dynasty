import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Background3.css";

const Background3 = ({ className = "" }) => {
  return (
    <div className={`background13 ${className}`}>
      <img className="image-icon17" alt="" src="/image-30@2x.png" />
      <div className="container91">
        <div className="container92">
          <b className="fn-phase-25">
            <span>FN · </span>
            <span className="phase-25">Phase 2</span>
          </b>
        </div>
        <div className="container93">
          <div className="container94">
            <b className="b8">$376.18</b>
          </div>
        </div>
        <Button
          className="frame-button"
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
      <div className="container95">
        <div className="margin6">
          <div className="x35">x3</div>
        </div>
        <div className="container96">
          <div className="container97">
            <img className="icon6" alt="" src="/icon-4.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

Background3.propTypes = {
  className: PropTypes.string,
};

export default Background3;

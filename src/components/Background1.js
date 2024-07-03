import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Background1.css";

const Background1 = ({ className = "", image }) => {
  return (
    <div className={`background6 ${className}`}>
      <img className="image-icon13" alt="" src={image} />
      <div className="container48">
        <div className="container49">
          <b className="fn-phase-21">
            <span>FN · </span>
            <span className="phase-21">Phase 2</span>
          </b>
        </div>
        <div className="container50">
          <div className="container51">
            <b className="b4">$376.18</b>
          </div>
        </div>
        <Button
          className="container-child"
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
      <div className="container52">
        <div className="margin1">
          <div className="x31">x3</div>
        </div>
        <div className="container53">
          <img className="container-icon" />
        </div>
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
};

export default Background1;

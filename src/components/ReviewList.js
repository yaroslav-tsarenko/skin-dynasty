import PropTypes from "prop-types";
import "./ReviewList.css";

const ReviewList = ({ className = "", greatDesignTheSiteIsEasyT }) => {
  return (
    <div className={`review-list ${className}`}>
      <div className="container22">
        <div className="container23">
          <img className="image-icon6" alt="" src="/image-6@2x.png" />
        </div>
        <div className="time">
          <div className="weeks-ago">4 weeks ago</div>
        </div>
      </div>
      <div className="great-design-the">{greatDesignTheSiteIsEasyT}</div>
      <div className="figcaption-billy">Billy Oliveira</div>
    </div>
  );
};

ReviewList.propTypes = {
  className: PropTypes.string,
  greatDesignTheSiteIsEasyT: PropTypes.string,
};

export default ReviewList;

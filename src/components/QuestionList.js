import PropTypes from "prop-types";
import "./QuestionList.css";

const QuestionList = ({
  className = "",
  heading3HowDoIBuySkins,
  toPurchaseAGameSkinBrowse,
}) => {
  return (
    <div className={`question-list ${className}`}>
      <div className="container24">
        <div className="wrapper-svg">
          <img className="svg-icon7" alt="" src="/svg-7.svg" />
        </div>
      </div>
      <div className="question-details">
        <div className="heading-3">{heading3HowDoIBuySkins}</div>
        <div className="to-purchase-a">{toPurchaseAGameSkinBrowse}</div>
        <div className="button3">
          <div className="read-more">READ MORE</div>
        </div>
      </div>
    </div>
  );
};

QuestionList.propTypes = {
  className: PropTypes.string,
  heading3HowDoIBuySkins: PropTypes.string,
  toPurchaseAGameSkinBrowse: PropTypes.string,
};

export default QuestionList;

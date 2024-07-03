import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`container-parent ${className}`}>
      <div className="container14">
        <h1 className="unleash-your-best">Unleash Your Best Look</h1>
        <div className="pick-the-items-container">
          <p className="pick-the-items">
            Pick the items you want to upgrade and the ones you want to
          </p>
          <p className="receive-and-get">
            receive, and get a trade offer instantly!
          </p>
        </div>
        <div className="btn1">
          <div className="browse-more">Browse More</div>
          <img
            className="line-arrow-right-icon"
            alt=""
            src="/line-arrowright.svg"
          />
        </div>
      </div>
      <img
        className="ava-fbiciich6gqpng-icon"
        loading="lazy"
        alt=""
        src="/avafbiciich6gqpng@2x.png"
      />
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;

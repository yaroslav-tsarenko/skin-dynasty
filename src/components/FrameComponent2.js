import Background2 from "./Background2";
import Background1 from "./Background1";
import Background3 from "./Background3";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`similar-products-parent ${className}`}>
      <h1 className="similar-products">Similar Products</h1>
      <div className="products-grid">
        <Background2 image="/image@2x.png" />
        <Background1 image="/image-11@2x.png" />
        <Background1 image="/image-21@2x.png" />
        <Background1 image="/image-31@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-51@2x.png" />
        <Background1 image="/image-61@2x.png" />
        <Background1 image="/image-7@2x.png" />
        <Background1 image="/image@2x.png" />
        <Background1 image="/image-9@2x.png" />
        <Background2 image="/image-10@2x.png" />
        <Background1 image="/image-111@2x.png" />
        <Background1 image="/image@2x.png" />
        <Background1 image="/image@2x.png" />
        <Background1 image="/image@2x.png" />
        <Background1 image="/image-11@2x.png" />
        <Background1 image="/image-21@2x.png" />
        <Background1 image="/image-31@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background2 image="/image-41@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-41@2x.png" />
        <Background1 image="/image-51@2x.png" />
        <Background1 image="/image-61@2x.png" />
        <Background3 />
        <Background3 />
        <Background3 />
        <Background3 />
        <Background3 />
        <Background3 />
        <Background3 />
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

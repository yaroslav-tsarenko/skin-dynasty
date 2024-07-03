import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`testimonials-wrapper ${className}`}>
      <div className="testimonials">
        <div className="container15">
          <div className="testimonial-content">
            <div className="background2">
              <div className="link-neo-noir">Neo-Noir</div>
              <img
                className="neo-noirpaedn68epng-icon"
                loading="lazy"
                alt=""
                src="/neonoirpaedn68epng@2x.png"
              />
              <div className="container16">
                <div className="container17">
                  <div className="div">$74.16</div>
                </div>
                <img className="svg-icon4" alt="" src="/svg-4.svg" />
                <div className="container18">
                  <div className="div1">$52.91</div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-parent">
            <img className="image-icon1" alt="" src="/image-1.svg" />
            <div className="autotronic-images-container">
              <div className="autotronic-image-two-container">
                <img className="image-icon2" alt="" src="/image-2.svg" />
              </div>
              <div className="autotronic-image-three-contain">
                <div className="autotronic-image-four-containe">
                  <img className="image-icon3" alt="" src="/image-3.svg" />
                </div>
                <div className="background3">
                  <div className="link6">
                    <div className="autotronic">Autotronic</div>
                  </div>
                  <img className="image-icon4" alt="" src="/image-4@2x.png" />
                  <div className="container19">
                    <div className="container20">
                      <div className="div2">$1,491.12</div>
                    </div>
                    <img className="svg-icon5" alt="" src="/svg-5.svg" />
                    <div className="container21">
                      <div className="div3">$1,108.43</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="howl-content-wrapper">
            <div className="howl-content">
              <div className="background4">
                <div className="link-howl">Howl</div>
                <img
                  className="howlbzqutawlpng-icon"
                  alt=""
                  src="/howlbzqutawlpng@2x.png"
                />
                <div className="howl-description-container">
                  <div className="frame-group">
                    <div className="frame">
                      <div className="div4">$4,593.73</div>
                    </div>
                    <div className="svg-wrapper">
                      <img className="svg-icon6" alt="" src="/svg-6.svg" />
                    </div>
                    <div className="div5">$3,596.92</div>
                  </div>
                </div>
              </div>
              <img className="image-icon5" alt="" src="/image-5.svg" />
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="pricing">
              <h1 className="safest-and-most">{`Safest and Most Affordable `}</h1>
              <div className="enjoy-fair-prices-container">
                <p className="enjoy-fair-prices">
                  Enjoy fair prices. Get the skins you want at the lowest prices
                </p>
                <p className="with-our-safe">
                  with our safe purchasing options.
                </p>
              </div>
            </div>
            <div className="button-content-wrapper">
              <div className="button-content">
                <div className="browse-more1">Browse More</div>
                <img
                  className="line-arrow-right-icon1"
                  alt=""
                  src="/line-arrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;

import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <div className={`content2 ${className}`}>
      <div className="product">
        <div className="product-views">
          <div className="d-view-wrapper">
            <div className="d-view">3D View</div>
          </div>
          <div className="inspect-in-game-wrapper">
            <div className="inspect-in-game">Inspect-In-game</div>
          </div>
          <div className="screenshot-wrapper">
            <div className="screenshot">Screenshot</div>
          </div>
          <div className="view-in-inventory-wrapper">
            <div className="view-in-inventory">View in Inventory</div>
          </div>
        </div>
        <div className="image-container">
          <div className="product-image-wrapper">
            <div className="product-image">
              <div className="wrapper-pngegg-4-3">
                <img
                  className="pngegg-4-3"
                  loading="lazy"
                  alt=""
                  src="/pngegg-4-3@2x.png"
                />
              </div>
              <div className="sharebtn">
                <img
                  className="send-2-icon"
                  loading="lazy"
                  alt=""
                  src="/send2.svg"
                />
              </div>
            </div>
          </div>
          <div className="product-name">
            <h1 className="ak-47-phantom-reaper">AK-47 |Phantom Reaper</h1>
            <b className="product-title">$29.33</b>
          </div>
          <Button
            className="link13"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "16",
              background: "#13b5cb",
              borderRadius: "6px",
              "&:hover": { background: "#13b5cb" },
              width: 736,
              height: 48,
            }}
          >
            Add to Cart
          </Button>
        </div>
        <div className="the-phantom-reaper">{`The Phantom Reaper is a sleek, futuristic sniper rifle designed for elite sharpshooters. Its matte black finish is accented with ghostly silver skull motifs, giving it an eerie and intimidating presence on the battlefield. Equipped with a state-of-the-art scope and advanced recoil dampening system, the Phantom Reaper ensures pinpoint accuracy and maximum damage at long ranges. This weapon is as silent as it is deadly, making it the perfect choice for those who strike fear into their enemies from the shadows.  `}</div>
      </div>
      <div className="product-details">
        <div className="summary-container">
          <b className="summary">Summary</b>
          <div className="specifications">
            <div className="specification-items-wrapper">
              <div className="specification-items">
                <div className="type">Type</div>
                <input className="rifle" placeholder="Rifle" type="text" />
              </div>
            </div>
            <div className="specifications-inner">
              <div className="pattern-parent">
                <div className="pattern">Pattern</div>
                <input className="input2" placeholder="714" type="text" />
              </div>
            </div>
            <div className="specifications-child">
              <div className="rarity-parent">
                <div className="rarity">Rarity</div>
                <div className="legendary">Legendary</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-title-container">
          <b className="ak-47-phantom-reaper1">AK-47 |Phantom Reaper</b>
          <div className="statistics">
            <div className="statistic-items-wrapper">
              <div className="statistic-items">
                <div className="side">Side</div>
                <div className="counter-terrorists">Counter-Terrorists</div>
              </div>
            </div>
            <div className="statistics-inner">
              <div className="body-damage-parent">
                <div className="body-damage">Body damage</div>
                <div className="div8">40/28</div>
              </div>
            </div>
            <div className="statistics-child">
              <div className="head-damage-parent">
                <div className="head-damage">Head damage</div>
                <div className="div9">131/92</div>
              </div>
            </div>
            <div className="frame-div">
              <div className="magazine-capacity-parent">
                <div className="magazine-capacity">Magazine Capacity</div>
                <div className="div10">30/90</div>
              </div>
            </div>
            <div className="statistics-inner1">
              <div className="accuracy-range-parent">
                <div className="accuracy-range">Accuracy range</div>
                <div className="m1">28 m</div>
              </div>
            </div>
            <div className="statistics-inner2">
              <div className="rate-of-fire-parent">
                <div className="rate-of-fire">Rate of fire</div>
                <div className="shotsmin">666 shots/min</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;

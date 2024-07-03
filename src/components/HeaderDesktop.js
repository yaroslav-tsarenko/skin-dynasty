import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./HeaderDesktop.css";

const HeaderDesktop = ({ className = "" }) => {
  return (
    <div className={`header-desktop ${className}`}>
      <header className="ticker">
        <div className="get-100-off-container">
          <span className="get-100-off">{`Get $100 off on purchases over $30. `}</span>
          <span className="add-voucher">Add Voucher</span>
        </div>
      </header>
      <div className="header">
        <div className="container">
          <div className="link">
            <img
              className="skin-dynasty-transparent-1"
              loading="lazy"
              alt=""
              src="/skin-dynasty-transparent-1@2x.png"
            />
          </div>
          <div className="nav-main-navigation">
            <div className="list">
              <div className="item">
                <div className="link1">
                  <div className="market">Market</div>
                </div>
              </div>
              <div className="item1">
                <div className="link2">
                  <div className="support">Support</div>
                </div>
              </div>
              <div className="item2">
                <div className="link3">
                  <div className="blog">Blog</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="link4"
          startIcon={<img width="20px" height="20px" src="/img.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#000",
            fontSize: "14",
            background: "#13b5cb",
            borderRadius: "6px",
            "&:hover": { background: "#13b5cb" },
            width: 182,
          }}
        >
          Sign in via Steam
        </Button>
      </div>
    </div>
  );
};

HeaderDesktop.propTypes = {
  className: PropTypes.string,
};

export default HeaderDesktop;

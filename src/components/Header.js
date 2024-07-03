import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header4 ${className}`}>
      <div className="container">
        <div className="link">
          <img
            className="skin-dynasty-transparent-1"
            loading="lazy"
            alt=""
            src="/skin-dynasty-transparent-1@2x.png"
          />
        </div>
        <nav className="nav-main-navigation">
          <nav className="list">
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
          </nav>
        </nav>
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
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;

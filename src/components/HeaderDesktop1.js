import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./HeaderDesktop1.css";

const HeaderDesktop1 = ({ className = "" }) => {
  return (
    <section className={`header-desktop1 ${className}`}>
      <div className="ticker1">
        <div className="get-100-off-container1">
          <span className="get-100-off1">{`Get $100 off on purchases over $30. `}</span>
          <span className="add-voucher1">Add Voucher</span>
        </div>
      </div>
      <header className="header3">
        <div className="container11">
          <div className="link12">
            <img
              className="skin-dynasty-transparent-12"
              loading="lazy"
              alt=""
              src="/skin-dynasty-transparent-1@2x.png"
            />
          </div>
          <nav className="nav-main-navigation1">
            <nav className="list8">
              <div className="item14">
                <div className="link13">
                  <div className="market1">Market</div>
                </div>
              </div>
              <div className="item15">
                <div className="link14">
                  <div className="support1">Support</div>
                </div>
              </div>
              <div className="item16">
                <div className="link15">
                  <div className="blog1">Blog</div>
                </div>
              </div>
            </nav>
          </nav>
        </div>
        <Button
          className="link16"
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
    </section>
  );
};

HeaderDesktop1.propTypes = {
  className: PropTypes.string,
};

export default HeaderDesktop1;

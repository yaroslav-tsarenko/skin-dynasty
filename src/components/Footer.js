import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  skinDynastyTransparent1,
  sVG,
  sVG1,
  sVG2,
  sVG3,
}) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="section">
        <div className="link8">
          <img
            className="skin-dynasty-transparent-11"
            alt=""
            src={skinDynastyTransparent1}
          />
        </div>
        <div className="container31">
          <TextField
            className="button4"
            variant="standard"
            select
            value={1}
            InputProps={{
              startAdornment: (
                <InputAdornment
                  position="start"
                  style={{ marginLeft: "9px", marginRight: "8px" }}
                >
                  <img width="16px" height="16px" src="/ensvg.svg" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ marginRight: "9px" }}>
                  <img width="12px" height="12px" src="/svg-18.svg" />
                </InputAdornment>
              ),
            }}
            SelectProps={{ IconComponent: () => null }}
            sx={{
              borderColor: "#13cbb4",
              borderStyle: "SOLID",
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "rgba(19, 203, 180, 0.05)",
              borderRadius: "6px",
              width: "100%",
              height: "32px",
              "& .MuiInput-underline:before": { borderBottom: "none" },
              "& .MuiInput-underline:after": { borderBottom: "none" },
              "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                borderBottom: "none",
              },
              "& .MuiInputBase-root": { height: "100%" },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 16,
                fontWeight: "Regular",
                fontFamily: "Inter",
                textAlign: "left",
                p: "0 !important",
              },
            }}
          >
            <MenuItem value={1}>English / USD</MenuItem>
          </TextField>
        </div>
      </div>
      <div className="footer-navigation">
        <div className="section1">
          <div className="heading-31">
            <b className="about-us">About Us</b>
          </div>
          <div className="list-item-link">
            <div className="affiliate-program">Affiliate Program</div>
          </div>
        </div>
        <div className="section2">
          <div className="heading-32">
            <b className="legal">Legal</b>
          </div>
          <div className="list1">
            <div className="item-link">
              <div className="terms-of-service">Terms of Service</div>
            </div>
            <div className="item-link1">
              <a className="privacy-policy">Privacy Policy</a>
            </div>
            <div className="item-link2">
              <div className="refund-policy">Refund Policy</div>
            </div>
            <div className="item-link3">
              <div className="cookie-policy">Cookie Policy</div>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="heading-33">
            <b className="trade">Trade</b>
          </div>
          <div className="list2">
            <div className="item-link4">
              <div className="trade-csgo-skins">Trade CS:GO Skins</div>
            </div>
            <div className="item-link5">
              <div className="trade-rust-skins">Trade Rust Skins</div>
            </div>
            <div className="item-link6">
              <div className="trade-tf2-skins">Trade TF2 Skins</div>
            </div>
          </div>
        </div>
        <div className="section4">
          <div className="heading-34">
            <b className="free">Free</b>
          </div>
          <div className="list3">
            <div className="item-link7">
              <div className="free-csgo-skins">Free CS:GO Skins</div>
            </div>
            <div className="item-link8">
              <div className="free-rust-skins">Free Rust Skins</div>
            </div>
            <div className="item-link9">
              <div className="free-tf2-skins">Free TF2 Skins</div>
            </div>
          </div>
        </div>
        <div className="section5">
          <div className="heading-35">
            <b className="buy">Buy</b>
          </div>
          <div className="list4">
            <div className="item-link10">
              <div className="buy-csgo-skins">Buy CS:GO Skins</div>
            </div>
            <div className="item-link11">
              <div className="buy-rust-skins">Buy Rust Skins</div>
            </div>
            <div className="item-link12">
              <div className="buy-tf2-skins">Buy TF2 Skins</div>
            </div>
          </div>
        </div>
        <div className="section6">
          <div className="heading-36">
            <b className="sell">Sell</b>
          </div>
          <div className="list5">
            <div className="item-link13">
              <div className="sell-csgo-skins">Sell CS:GO Skins</div>
            </div>
            <div className="item-link14">
              <div className="sell-rust-skins">Sell Rust Skins</div>
            </div>
            <div className="item-link15">
              <div className="sell-tf2-skins">Sell TF2 Skins</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container32">
        <div className="horizontalborder">
          <div className="section7">
            <div className="list6">
              <div className="item3">
                <div className="link9">
                  <img className="svg-icon10" alt="" src={sVG} />
                  <div className="container33">
                    <div className="tiktok">Tiktok</div>
                  </div>
                </div>
              </div>
              <div className="item4">
                <div className="link10">
                  <img className="svg-icon11" alt="" src={sVG1} />
                  <div className="container34">
                    <div className="discord">Discord</div>
                  </div>
                </div>
              </div>
              <div className="item5">
                <div className="link11">
                  <img className="svg-icon12" alt="" src={sVG2} />
                  <div className="container35">
                    <div className="instagram">Instagram</div>
                  </div>
                </div>
              </div>
              <div className="item6">
                <div className="link12">
                  <img className="svg-icon13" alt="" src={sVG3} />
                  <div className="container36">
                    <div className="xcom">X.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section8">
            <div className="list7">
              <div className="item7">
                <img className="image-icon7" alt="" src="/image-14.svg" />
              </div>
              <div className="item8">
                <img className="image-icon8" alt="" src="/image-14.svg" />
              </div>
              <div className="item9">
                <img
                  className="union-paybr9l8l7isvg-icon"
                  loading="lazy"
                  alt=""
                  src="/image-14.svg"
                />
              </div>
              <div className="item10">
                <img className="image-icon9" alt="" src="/image-16.svg" />
              </div>
              <div className="item11">
                <img className="image-icon10" alt="" src="/image-17.svg" />
              </div>
              <div className="item12">
                <img className="image-icon11" alt="" src="/image-14.svg" />
              </div>
              <div className="item13">
                <div className="container37">
                  <div className="and-200-more">and 200+ more</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="horizontalborder1">
        <div className="container38">
          <div className="swapg-all-rights">
            © 2017-2023, Swap.g All rights reserved.
          </div>
        </div>
        <div className="container39">
          <div className="not-affiliated-with">
            Not affiliated with Valve Corp. Swap.gg™ is a tradename of Swap.gg
            B.V., Sloterweg 796, (1066 CN) Amsterdam, the Netherlands.
          </div>
        </div>
        <div className="container40">
          <div className="email-infoswapgg-">
            Email: info@swap.gg - Phone: +31 970 102 06796
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  skinDynastyTransparent1: PropTypes.string,
  sVG: PropTypes.string,
  sVG1: PropTypes.string,
  sVG2: PropTypes.string,
  sVG3: PropTypes.string,
};

export default Footer;

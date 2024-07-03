import {
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  TextField,
  Icon,
  IconButton,
} from "@mui/material";
import Background2 from "./Background2";
import Background1 from "./Background1";
import Background from "./Background";
import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <form className="content-left">
        <div className="filters">
          <div className="filter-top">
            <Button
              className="button5"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#13b5cb",
                fontSize: "14",
                borderColor: "#13b5cb",
                borderRadius: "6px",
                "&:hover": { borderColor: "#13b5cb" },
                height: 32,
              }}
            >
              Reset Filters
            </Button>
            <div className="price-filter">
              <div className="price-input">
                <div className="price">Price</div>
                <img
                  className="svg-icon14"
                  loading="lazy"
                  alt=""
                  src="/svg1.svg"
                />
              </div>
            </div>
          </div>
          <div className="max-price">
            <div className="max-price-input">
              <div className="max-price-container">
                <div className="container60">
                  <div className="input">
                    <div className="container61">
                      <div className="max-price-value">$0.00</div>
                    </div>
                  </div>
                </div>
                <div className="divider-container">
                  <div className="horizontal-divider" />
                </div>
                <div className="container62">
                  <div className="input1">
                    <div className="container63">
                      <div className="div6">∞</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="background8">
                <div className="container64">
                  <div className="background9" />
                </div>
                <div className="slider" />
                <div className="slider1" />
              </div>
            </div>
          </div>
          <div className="item-filters">
            <div className="button6">
              <div className="filter-button-content">
                <div className="trade-lock">Trade Lock</div>
                <div className="info-circle-container">
                  <img className="info-circle-icon" alt="" />
                </div>
              </div>
              <div className="filter-icons">
                <img className="svg-icon15" alt="" />
              </div>
            </div>
            <FormControl
              className="button7"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "8px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/svg-2.svg"
                    style={{ marginRight: "8px" }}
                  />
                )}
              >
                <MenuItem>Type</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="color-filter">
            <FormControl
              className="button8"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "8px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/svg-3.svg"
                    style={{ marginRight: "8px" }}
                  />
                )}
              >
                <MenuItem>Colors</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className="category-filters">
            <FormControl
              className="button9"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "8px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/svg-4.svg"
                    style={{ marginRight: "8px" }}
                  />
                )}
              >
                <MenuItem>Exterior</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className="button10"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "8px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/svg-5.svg"
                    style={{ marginRight: "8px" }}
                  />
                )}
              >
                <MenuItem>Collection</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className="button11"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                borderRadius: "0px 0px 0px 0px",
                width: "100%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: "Regular",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "8px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/svg-6.svg"
                    style={{ marginRight: "8px" }}
                  />
                )}
              >
                <MenuItem>Other</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <div className="inventory">
          <div className="container65">
            <div className="container66">
              <div className="refresh-button-container">
                <div className="button-refresh-inventory">
                  <div className="container67">
                    <img className="icon2" alt="" src="/icon.svg" />
                  </div>
                </div>
              </div>
              <TextField
                className="background10"
                placeholder="Search..."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <img width="14px" height="20px" src="/icon-1.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "36px",
                    backgroundColor: "#303030",
                    paddingLeft: "12px",
                  },
                  "& .MuiInputBase-input": {
                    paddingLeft: "12px",
                    color: "#5a5a5a",
                  },
                }}
              />
              <div className="container68">
                <div className="container69">
                  <img
                    className="cs2png-icon"
                    loading="lazy"
                    alt=""
                    src="/cs2png@2x.png"
                  />
                  <div className="margin3">
                    <div className="cs2">CS2</div>
                  </div>
                </div>
                <div className="container70">
                  <div className="container71">
                    <div className="container72">
                      <img className="icon3" alt="" src="/icon-2.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container73">
              <div className="container74">
                <div className="container75">
                  <div className="price-max">Price: Max</div>
                </div>
                <div className="container76">
                  <div className="container77">
                    <img className="icon4" alt="" src="/icon-2.svg" />
                  </div>
                </div>
              </div>
              <div className="cart-container">
                <div className="button-refresh-inventory1">
                  <div className="div7">$0</div>
                  <img
                    className="shopping-cart-icon"
                    loading="lazy"
                    alt=""
                    src="/shoppingcart.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="items">
            <Background2 image="/image@2x.png" />
            <Background1 image="/image-11@2x.png" />
            <Background1 image="/image-21@2x.png" />
            <Background1 image="/image-31@2x.png" />
            <Background1 image="/image-41@2x.png" />
            <Background1 image="/image-51@2x.png" />
            <Background1 image="/image-61@2x.png" />
            <Background2 image="/image-7@2x.png" />
            <Background1 image="/image@2x.png" />
            <Background1 image="/image-9@2x.png" />
            <Background1 image="/image-10@2x.png" />
            <Background1 image="/image-111@2x.png" />
            <Background1 image="/image@2x.png" />
            <Background1 image="/image@2x.png" />
            <Background2 image="/image@2x.png" />
            <Background1 image="/image-11@2x.png" />
            <Background1 image="/image-21@2x.png" />
            <Background1 image="/image-31@2x.png" />
            <Background1 image="/image-41@2x.png" />
            <Background1 image="/image-51@2x.png" />
            <Background1 image="/image-61@2x.png" />
            <div className="background11">
              <img className="image-icon15" alt="" src="/image@2x.png" />
              <div className="container78">
                <div className="container79">
                  <b className="fn-phase-23">
                    <span>
                      <span className="fn">FN · </span>
                      <span className="phase-23">Phase 2</span>
                    </span>
                  </b>
                </div>
                <div className="container80">
                  <div className="container81">
                    <b className="b6">$376.18</b>
                  </div>
                </div>
                <Button
                  className="container-inner"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "14",
                    background: "#ca5a2a",
                    borderRadius: "4px",
                    "&:hover": { background: "#ca5a2a" },
                    height: 37,
                  }}
                >
                  Add to cart
                </Button>
              </div>
              <div className="container82">
                <div className="margin4">
                  <div className="x33">x3</div>
                </div>
                <div className="container83">
                  <div className="container84">
                    <img
                      className="icon5"
                      loading="lazy"
                      alt=""
                      src="/icon-4.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Background />
            <Background />
            <Background />
            <div className="background12">
              <img className="image-icon16" alt="" src="/image@2x.png" />
              <div className="container85">
                <div className="container86">
                  <b className="fn-phase-24">
                    <span>
                      <span className="fn1">FN · </span>
                      <span className="phase-24">Phase 2</span>
                    </span>
                  </b>
                </div>
                <div className="container87">
                  <div className="container88">
                    <b className="b7">$376.18</b>
                  </div>
                </div>
                <div className="add-to-cart-wrapper">
                  <div className="add-to-cart">Add to cart</div>
                </div>
              </div>
              <div className="container89">
                <div className="margin5">
                  <div className="x34">x3</div>
                </div>
                <div className="container90">
                  <img className="container-icon2" />
                </div>
              </div>
            </div>
            <Background />
            <Background />
          </div>
        </div>
      </form>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;

import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./CardRows.css";

const CardRows = ({
  className = "",
  fentyBeauty50OFFGiftCard,
  discount20OFF,
}) => {
  return (
    <div className={`card-rows ${className}`}>
      <div className="card-columns">
        <img
          className="card-images-icon"
          loading="lazy"
          alt=""
          src="/rectangle-4554@2x.png"
        />
        <div className="card-details">
          <b className="fenty-beauty-50">{fentyBeauty50OFFGiftCard}</b>
          <b className="discount-20-off">{discount20OFF}</b>
        </div>
        <div className="card-actions">
          <div className="action-rows">
            <b className="add-buttons">$120.00</b>
            <b className="credits">12 Credits</b>
          </div>
          <div className="remove-rows">
            <div className="remove-columns">
              <div className="remove-buttons1">
                <img
                  className="icon-plus"
                  loading="lazy"
                  alt=""
                  src="/iconplus.svg"
                />
              </div>
              <b className="quantity">3</b>
              <input className="add-columns" type="checkbox" />
            </div>
            <FormControl
              className="durations"
              variant="standard"
              sx={{
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#13b5cb",
                borderRadius: "8px",
                width: "100%",
                height: "38px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "38px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "38px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "Bold",
                  fontFamily: "Archivo",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "16px",
                },
              }}
            >
              <InputLabel color="info" />
              <Select
                color="info"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="16px"
                    height="16px"
                    src="/frame-1000002972.svg"
                    style={{ marginRight: "16px" }}
                  />
                )}
              >
                <MenuItem>Hourly</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
        <b className="empty-rows">$120.00</b>
      </div>
      <div className="dividers" />
    </div>
  );
};

CardRows.propTypes = {
  className: PropTypes.string,
  fentyBeauty50OFFGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,
};

export default CardRows;

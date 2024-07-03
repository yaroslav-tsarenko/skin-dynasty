import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./PriceChart.css";

const PriceChart = ({ className = "" }) => {
  return (
    <div className={`price-chart ${className}`}>
      <div className="price-chart-header">
        <h1 className="price-changes">Price Changes</h1>
        <FormControl
          className="parent"
          variant="standard"
          sx={{
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "0px 0px 0px 0px",
            width: "81px",
            height: "21px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "21px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "21px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "21px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "21px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#fafafa",
              fontSize: 14,
              fontWeight: "Regular",
              fontFamily: "Inter",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img width="16px" height="16px" src="/arrowdown.svg" style={{}} />
            )}
          >
            <MenuItem>All Time</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
      </div>
      <div className="chart-container">
        <div className="chart-grid">
          <div className="chart-values">80</div>
          <div className="chart-values1">60</div>
          <div className="chart-values2">40</div>
          <div className="chart-values3">20</div>
          <div className="chart-values4">0</div>
        </div>
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

PriceChart.propTypes = {
  className: PropTypes.string,
};

export default PriceChart;

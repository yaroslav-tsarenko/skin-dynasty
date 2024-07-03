import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PropTypes from "prop-types";
import "./PostList.css";

const PostList = ({ className = "" }) => {
  const [timeDateTimePickerValue, setTimeDateTimePickerValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={`post-list ${className}`}>
        <img
          className="swapblog-banana-the-3rd-la-icon"
          loading="lazy"
          alt=""
          src="/swapblogbananathe3rdlargestgameonsteaminterviewwithadev1jpg@2x.png"
        />
        <div className="post-content">
          <div className="container25">
            <div className="container26" />
            <div className="container27" />
          </div>
          <div className="epic-showdown-at-container">
            <p className="epic-showdown-at">Epic Showdown at the Global CS</p>
            <p className="championship-top-teams">
              Championship: Top Teams Battle for Glory!
            </p>
          </div>
          <div className="container28">
            <div className="time1">
              <DatePicker
                value={timeDateTimePickerValue}
                onChange={(newValue) => {
                  setTimeDateTimePickerValue(newValue);
                }}
                sx={{
                  fieldset: {
                    borderColor: "transparent",
                    borderTopWidth: 1,
                    borderRightWidth: 1,
                    borderBottomWidth: 1,
                    borderLeftWidth: 1,
                  },
                  "&:hover": {
                    fieldset: { borderColor: "transparent" },
                    ".MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                  "& input::placeholder": { textColor: "#fff", fontSize: 14 },
                  input: {
                    color: "#fff",
                    fontSize: 14,
                    textAlign: "left",
                    fontWeight: "400",
                  },
                  "& .MuiInputBase-root": {
                    height: 20,
                    gap: "8px",
                    flexDirection: { flexDirection: "row" },
                  },
                }}
                slotProps={{
                  textField: {
                    size: "medium",
                    fullWidth: true,
                    required: false,
                    autoFocus: false,
                    error: false,
                    placeholder: "Jun 16, 2024",
                  },
                  openPickerIcon: {
                    component: () => <></>,
                  },
                }}
              />
            </div>
            <div className="container29">
              <a className="read-more1">Read More</a>
              <img className="svg-icon8" alt="" src="/svg-13.svg" />
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

PostList.propTypes = {
  className: PropTypes.string,
};

export default PostList;

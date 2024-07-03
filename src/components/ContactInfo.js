import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ContactLabels from "./ContactLabels";
import PropTypes from "prop-types";
import "./ContactInfo.css";

const ContactInfo = ({ className = "" }) => {
  return (
    <div className={`contact-info ${className}`}>
      <ContactLabels
        contactInformation="Contact Information"
        formLabelPlaceholder="Email"
      />
      <h3 className="payment-information">Payment Information</h3>
      <div className="card-details">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="placeholder">1234 1234 1234 1234</div>
          <div className="card-date-fields">
            <img
              className="card-dates-icon"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="card-dates-icon1"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="card-dates-icon2"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon1" alt="" src="/icon.svg" />
        </div>
        <div className="card-date-labels">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#b6b6b6" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#1c1c1c",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#b6b6b6" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#1c1c1c",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
        </div>
      </div>
      <ContactLabels
        contactInformation="Carholder Name"
        formLabelPlaceholder="Name on Card"
      />
      <div className="country-selection">
        <div className="country-or-region">Country or region</div>
        <div className="form-field4">
          <div className="usa">USA</div>
          <img
            className="country-placeholder-icon"
            alt=""
            src="/country-placeholder.svg"
          />
          <img className="icon2" alt="" src="/icon.svg" />
        </div>
      </div>
      <div className="verification">
        <input className="agreement-placeholder" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="contact-info-child"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button3"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "rgba(250, 250, 250, 0.8)",
          fontSize: "16",
          background: "#13b5cb",
          borderRadius: "4px",
          "&:hover": { background: "#13b5cb" },
          height: 54,
        }}
      >
        Pay Now
      </Button>
    </div>
  );
};

ContactInfo.propTypes = {
  className: PropTypes.string,
};

export default ContactInfo;

import PropTypes from "prop-types";
import "./ContactLabels.css";

const ContactLabels = ({
  className = "",
  contactInformation,
  formLabelPlaceholder,
}) => {
  return (
    <div className={`contact-labels ${className}`}>
      <div className="contact-information">{contactInformation}</div>
      <div className="form-field">
        <input
          className="form-label"
          placeholder={formLabelPlaceholder}
          type="text"
        />
        <img className="icon" alt="" src="/icon.svg" />
      </div>
    </div>
  );
};

ContactLabels.propTypes = {
  className: PropTypes.string,
  contactInformation: PropTypes.string,
  formLabelPlaceholder: PropTypes.string,
};

export default ContactLabels;

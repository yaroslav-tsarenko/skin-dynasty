import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <div className={`container9 ${className}`}>
      <div className="container10">
        <div className="k-parent">
          <b className="k">200K+</b>
          <div className="items-available-wrapper">
            <div className="items-available">Items Available</div>
          </div>
        </div>
        <div className="transaction-dividers">
          <div className="vertical-divider" />
        </div>
        <div className="transaction-dividers1">
          <div className="m-wrapper">
            <b className="m">10M+</b>
          </div>
          <div className="completed-transactions">Completed Transactions</div>
        </div>
        <div className="transaction-dividers2">
          <div className="vertical-divider1" />
        </div>
        <div className="transaction-dividers3">
          <div className="wrapper">
            <b className="b3">24/7</b>
          </div>
          <div className="premium-support">Premium Support</div>
        </div>
      </div>
      <div className="container11">
        <div className="background">
          <div className="container12">
            <b className="secure-transactions">
              <p className="secure">Secure</p>
              <p className="transactions">Transactions</p>
            </b>
          </div>
          <img className="svg-icon2" alt="" src="/svg-2@2x.png" />
        </div>
        <button className="background1">
          <div className="container13">
            <b className="instantpurchase">InstantPurchase</b>
          </div>
          <img className="svg-icon3" alt="" src="/svg-3.svg" />
        </button>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;

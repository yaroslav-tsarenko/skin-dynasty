import ReviewList from "./ReviewList";
import PropTypes from "prop-types";
import "./Testimonials.css";

const Testimonials = ({ className = "" }) => {
  return (
    <section className={`testimonials1 ${className}`}>
      <h1 className="trusted-by-thousands">Trusted by Thousands</h1>
      <div className="reviews">
        <ReviewList greatDesignTheSiteIsEasyT="Great design! The site is easy to navigate, and the skin previews are sharp and detailed. The vibrant colors make browsing enjoyable and engaging." />
        <ReviewList greatDesignTheSiteIsEasyT="Fantastic job! The site is user-friendly and visually appealing, with a sleek interface. The clear categories make finding specific skins a breeze." />
        <ReviewList greatDesignTheSiteIsEasyT="Fantastic job! The site is user-friendly and visually appealing, with a sleek interface. The clear categories make finding specific skins a breeze." />
        <ReviewList greatDesignTheSiteIsEasyT="Fantastic job! The site is user-friendly and visually appealing, with a sleek interface. The clear categories make finding specific skins a breeze." />
        <ReviewList greatDesignTheSiteIsEasyT="Fantastic job! The site is user-friendly and visually appealing, with a sleek interface. The clear categories make finding specific skins a breeze." />
        <ReviewList greatDesignTheSiteIsEasyT="Impressive design! The bold visuals and smooth navigation enhance the overall user experience. The interactive elements add a nice touch without being overwhelming." />
        <ReviewList greatDesignTheSiteIsEasyT="Excellent site! The homepage draws you in with its engaging visuals and clear calls to action. The detailed previews and easy checkout process make buying skins effortless" />
        <ReviewList greatDesignTheSiteIsEasyT="Outstanding work! The site combines a modern look with easy navigation, making it perfect for gamers. The detailed skin previews and organized layout make shopping a seamless experience" />
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;

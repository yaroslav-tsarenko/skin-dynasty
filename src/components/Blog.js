import PostList from "./PostList";
import PropTypes from "prop-types";
import "./Blog.css";

const Blog = ({ className = "" }) => {
  return (
    <section className={`blog1 ${className}`}>
      <h1 className="whats-new">What's New?</h1>
      <div className="posts">
        <PostList />
        <PostList />
        <PostList />
        <PostList />
      </div>
      <div className="link7">
        <div className="container30">
          <div className="explore-all-posts">Explore all Posts</div>
          <img className="svg-icon9" alt="" src="/svg-17.svg" />
        </div>
      </div>
    </section>
  );
};

Blog.propTypes = {
  className: PropTypes.string,
};

export default Blog;

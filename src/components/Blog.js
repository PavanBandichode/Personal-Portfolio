import React from "react";
import data from "../constants/constatnt";
const Blog = () => {
  let { blogPosts } = data;
  console.log("blogs");
  return (
    <>
      <h4>Blogs</h4>
      <div className="container blog-container">
        <div className="flex wrap ">
          {blogPosts.map((blog) => {
            return (
              <article
                className="media-flex-48 card-blog blog-card flex-48 flex-col justify"
                key={blog.title}
              >
                <div className="posted-on">
                  <span>{blog.postedOn}</span>
                </div>
                <div>
                  <div className="blog-card__img-div ">
                    <img src={blog.image} alt="Blog Img" />
                  </div>

                  <span className="blog-card__title">{blog.title}</span>

                  <p className="blog-card__desc">{blog.desc}</p>
                </div>

                <div>
                  <hr />
                  <a href={blog.url} target="_blank" rel="noreferrer">
                    Read More
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;

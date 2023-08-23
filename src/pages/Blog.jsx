import React from "react";
import save from "/src/assets/icons/save.svg";
import blogPost from "../components/items/blog";
import heart from "/src/assets/icons/heart.svg";
import leftArrow from "/src/assets/icons/left-arrow.svg";
import ellipse from "/src/assets/images/blog/Ellipse 1 (1).png";

function Blogs() {
  return (
    <>
      <div className="blog">
        <section className="blog__image">
          <div className="blog__top-tips">
            <div className="blog__top-tips-content">
              <div className="blog__top-tips-content-details">
                <h3 className="blog__top-tips-content-details-heading">
                  Top tips on how to prepare Coconut Candy
                </h3>
                <p className="blog__top-tips-content-details-description">
                  Coconut candy is very easy to prepare if you do not mind the
                  process of grating the coconut
                </p>
              </div>
              <div className="blog__top-tips-content-author">
                <div className="blog__top-tips-content-author-image">
                  <img
                    src={ellipse}
                    alt="author image"
                  />
                </div>
                <div className="blog__top-tips-content-author-info">
                  <h4 className="blog__top-tips-content-author-info-name">
                    Louisa Moje
                  </h4>
                  <p className="blog__top-tips-content-author-info-date">
                    Sept 17, 2022
                  </p>
                </div>
                <div className="blog__top-tips-content-buttons">
                  <button className="blog__top-tips-content-buttons-like">
                    <img src={heart} alt="like button" />
                  </button>
                  <button className="blog__top-tips-content-buttons-save">
                    <img src={save} alt="save button" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog__newsletter">
          <div className="blog__newsletter-content">
            <h4 className="blog__newsletter-content-title">Newsletter</h4>
            <div className="blog__newsletter-content-subcribe">
              <input type="email" name="email" id="email" placeholder="Email" />
              <button type="submit">Submit</button>
            </div>
          </div>
        </section>

        <section className="blog__posts">
          <article className="blog__posts-container">
            {blogPost.map((card, i) => {
              return (
                <div className="blog__post" key={i}>
                  <div className="blog__post-image">
                    <img src={card.image} alt="Delicious Delicacy" />
                  </div>
                  <div className="blog__post-details">
                    <p className="blog__post-details-date">{card.date}</p>
                    <h2 className="blog__post-details-title">{card.title}</h2>
                    <p className="blog__post-details-description">
                      {card.description}
                    </p>
                    <div className="blog__post-details-read-more">
                      <button>
                        <p>Read More</p>
                        <img
                          src={leftArrow}
                          alt="Read more"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </article>
        </section>
      </div>
    </>
  );
}

export default Blogs;

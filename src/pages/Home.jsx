import React from "react";
import { Link } from "react-router-dom";
import {
  ourProduct,
  specialDessert,
  popularCategories,
} from "../components/items/home";
import orderNow from "/src/assets/images/home/Rectangle 23.png";

function Home() {
  return (
    <>
      <main className="main" id="main">
        <div className="hero-wrapper">
          <section className="hero">
            <div className="hero__image"></div>
            <div className="hero__text-content">
              <h1 className="hero__text-content-heading">
                Indulge In The Delicacies Of African Desserts
              </h1>
              <p className="hero__text-content-description">
                Sweeten Your Life With Our African Delicacies
              </p>
              <Link to="/menu" className="hero__text-content-btn">
                <button type="submit">Order Now</button>
              </Link>
            </div>
          </section>
          <section className="rune-info">
            <p>
              Rune, Established in 2019 is a family owned, African dessert
              company. we are known for flavorful, real taste products, that
              conveys a sense of excitement and let you feel the taste of home.
            </p>
          </section>

          <div className="hero-detail">
            <section className="products">
              <div className="product-cards ourProduct">
                <h2 className="product-card__heading">Our Products</h2>
                <div className="product-card__container1">
                  {ourProduct.map((card, i) => {
                    return (
                      <div key={i} className="product-card">
                        <div className="product-card__image">
                          <img
                            className="product-card__image"
                            src={card.image}
                            alt="Delicious Delicacy"
                          />
                        </div>

                        <div className="product-card__content">
                          <h2 className="product-card__title">{card.title}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="product-cards specialDessert">
                <h2 className="product-card__heading">Special Dessert</h2>
                <div className="product-card__container2">
                  {specialDessert.map((card, i) => {
                    return (
                      <div key={i} className="product-card">
                        <div className="product-card__image">
                          <img
                            className="product-card__image"
                            src={card.image}
                            alt="Delicious Delicacy"
                          />
                        </div>

                        <div className="product-card__content">
                          <h2 className="product-card__title">{card.title}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="product-cards popularCategories">
                <h2 className="product-card__heading">Popular Categories</h2>
                <div className="product-card__container3">
                  {popularCategories.map((card, i) => {
                    return (
                      <div key={i} className="product-card">
                        <div className="product-card__image">
                          <img
                            className="product-card__image"
                            src={card.image}
                            alt="Delicious Delicacy"
                          />
                        </div>

                        <div className="product-card__content">
                          <h2 className="product-card__title">{card.title}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="main-content">
              <div className="main-content__text">
                <h2 className="main-content__text-title">
                  Place an order and get your dessert delivered to your
                  doorstep.
                </h2>
                <p className="main-content__text-description">
                  Get in touch with us today and experience dessert done right!
                </p>
                <button className="main-content__text-btn" type="submit">
                  <Link to="/menu">Order Now</Link>
                </button>
              </div>
              <div className="main-content__image">
                <img
                  src={orderNow}
                  alt="A Lady enjoying herself"
                />
              </div>
            </section>

            <section className="opening-hours image">
              <h1 className="opening-hours__title">Opening Hours</h1>
              <div className="opening-hours__details">
                <span className="opening-hours__day">
                  <h4>Monday - Thursday</h4>
                  <p>10AM - 9PM</p>
                </span>
                <span className="opening-hours__day">
                  <h4>Friday</h4>
                  <p>10AM - 12AM</p>
                </span>
                <span className="opening-hours__day">
                  <h4>Saturday</h4>
                  <p>10AM - 11PM</p>
                </span>
                <span className="opening-hours__day">
                  <h4>Sunday</h4>
                  <p>10AM - 7PM</p>
                </span>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;

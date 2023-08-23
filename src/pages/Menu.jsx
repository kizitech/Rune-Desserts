import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { DataContext } from "/src/components/DataProvider";

import phone from "/src/assets/icons/phone.png";
import search from "/src/assets/icons/search.svg";

function Menu() {
  const value = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState("");

  const [appetizers] = value.appetizers;
  const [veganDesserts] = value.veganDesserts;
  const [specialDesserts] = value.specialDesserts;

  return (
    <>
      <div className="menu">
        <div className="menu-title">
          <h3 className="menu-title__heading">Dessert Menu</h3>
        </div>

        <div className="menu-search">
          <div className="input-container">
            <input
              type="text"
              name="search"
              className="input"
              placeholder="search..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            <span className="icon">
              <img src={search} alt="Search icon" />
            </span>
          </div>
        </div>

        <section className="food-cards">
          <h4 className="food-card__heading">Special Menu</h4>
          <div className="food-card__container">
            {specialDesserts

              .filter((val) => {
                if (searchTerm == " ") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })

              .map((specialDessert) => {
                return (
                  <div key={specialDessert.id} className="food-card">
                    <Link
                      to={`/menu/special-dessert-order/${specialDessert._id}`}
                      className="food-card__image-card"
                      title="View Product"
                    >
                      <img
                        className="food-card__image"
                        src={specialDessert.image}
                        alt={specialDessert.alt}
                      />
                    </Link>

                    <div className="food-card__content">
                      <h2 className="food-card__title">
                        {specialDessert.title}
                      </h2>
                      <h3 className="food-card__price">
                        N{specialDessert.price}
                      </h3>
                      <Link
                        to={`/menu/special-dessert-order/${specialDessert._id}`}
                        className="food-card__button"
                      >
                        <button>View Product</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="food-cards">
          <h4 className="food-card__heading">Appetizers</h4>

          <div className="food-card__container">
            {appetizers

              .filter((val) => {
                if (searchTerm == " ") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })

              .map((appetizer) => {
                return (
                  <div key={appetizer.id} className="food-card">
                    <Link
                      to={`/menu/appetizer-order/${appetizer._id}`}
                      className="food-card__image"
                      title="View Product"
                    >
                      <img src={appetizer.image} alt="Delicious Delicacy" />
                    </Link>

                    <div className="food-card__content">
                      <h2 className="food-card__title">{appetizer.title}</h2>
                      <h3 className="food-card__price">N{appetizer.price}</h3>
                      <Link to="/order" className="food-card__button">
                        <button>View Product</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <section className="food-cards">
          <h4 className="food-card__heading">Vegan Desserts</h4>

          <div className="food-card__container">
            {veganDesserts

              .filter((val) => {
                if (searchTerm == " ") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })

              .map((veganDessert) => {
                return (
                  <div key={veganDessert.id} className="food-card">
                    <Link
                      to={`/menu/vegan-dessert-order/${veganDessert._id}`}
                      className="food-card__image"
                      title="View Product"
                    >
                      <img src={veganDessert.image} alt="Delicious Delicacy" />
                    </Link>

                    <div className="food-card__content">
                      <h2 className="food-card__title">{veganDessert.title}</h2>
                      <h3 className="food-card__price">
                        N{veganDessert.price}
                      </h3>
                      <Link to="/order" className="food-card__button">
                        <button>View Product</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <div className="menu-cta">
          <button className="menu-cta__btn">
            <p className="menu-cta__word">Delivery</p>
            <p className="menu-image">
              <img src={phone} alt="phone icon" />
            </p>
            <p className="menu-cta__word">+234 8 234 9090</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;

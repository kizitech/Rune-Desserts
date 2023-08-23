import React, { useContext } from "react";
import OrderMenu from "/src/components/OrderMenu.jsx";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "/src/components/DataProvider";

import add from "/src/assets/icons/plus.svg";
import remove from "/src/assets/icons/minus.svg";

function veganDessertOrder() {
  const { id } = useParams();
  const value = useContext(DataContext);

  const addVeganDesserts = value.addVeganDesserts;
  const [veganDesserts, setVeganDesserts] = value.veganDesserts;
  const veganDessertMeal = veganDesserts.filter((veganDessert, index) => {
    return veganDessert._id === id;
  });

  // INCREMENT AND DECREMENT OF VEGAN DESSERT PACKS
  const decrease = (id) => {
    veganDesserts.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setVeganDesserts([...veganDesserts]);
  };

  const increase = (id) => {
    veganDesserts.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setVeganDesserts([...veganDesserts]);
  };

  return (
    <div>
      <div className="menu">
        {veganDessertMeal.map((veganDessert) => (
          <section key={veganDessert._id} className="order">
            <div className="order__image">
              <img src={veganDessert.image} alt={veganDessert.alt} />
            </div>
            <div className="order__details">
              <div className="order__details-info">
                <h3 className="order__details-info-name">
                  {veganDessert.title}
                </h3>
                <p className="order__details-info-description">
                  {veganDessert.description}
                </p>
                <h4 className="order__details-info-price">
                  N{veganDessert.price} per pack
                </h4>
              </div>
              <div className="order__details-quantity">
                <div className="order__details-quantity-controls">
                  <p className="order__details-quantity-controls-text">Packs</p>
                  <div className="order__details-quantity-controls-counter">
                    <img
                      onClick={() => increase(veganDessert._id)}
                      src={add}
                      alt="Add to cart"
                    />
                    <h4 className="order__details-quantity-counter-value">
                      {veganDessert.count}
                    </h4>
                    <img
                      onClick={() => decrease(veganDessert._id)}
                      src={remove}
                      alt="Remove from cart"
                    />
                  </div>
                </div>
                <div className="order__details-quantity-buttons">
                  <button
                    onClick={() => addVeganDesserts(veganDessert._id)}
                    className="order__details-quantity-buttons-add"
                  >
                    Add to Cart
                  </button>
                  <Link
                    to="/menu/cart"
                    className="order__details-quantity-buttons-buy"
                  >
                    <button>Buy now</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
        ;
        <OrderMenu />
      </div>
    </div>
  );
}

export default veganDessertOrder;

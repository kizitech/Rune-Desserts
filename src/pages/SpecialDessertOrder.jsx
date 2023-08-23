import React, { useContext } from "react";
import OrderMenu from "/src/components/OrderMenu.jsx";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "/src/components/DataProvider";

import add from "/src/assets/icons/plus.svg";
import remove from "/src/assets/icons/minus.svg";

function SpecialDessertOrder() {
  const { id } = useParams();
  const value = useContext(DataContext);

  const addSpecialDesserts = value.addSpecialDesserts;
  const [specialDesserts, setSpecialDesserts] = value.specialDesserts;
  const specialDessertMeal = specialDesserts.filter((specialDessert, index) => {
    return specialDessert._id === id;
  });

  // INCREMENT AND DECREMENT OF SPECIAL DESSERT PACKS
  const decrease = (id) => {
    specialDesserts.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setSpecialDesserts([...specialDesserts]);
  };

  const increase = (id) => {
    specialDesserts.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setSpecialDesserts([...specialDesserts]);
  };

  return (
    <div>
      <div className="menu">
        {specialDessertMeal.map((specialDessert) => (
          <section key={specialDessert._id} className="order">
            <div className="order__image">
              <img src={specialDessert.image} alt={specialDessert.alt} />
            </div>
            <div className="order__details">
              <div className="order__details-info">
                <h3 className="order__details-info-name">
                  {specialDessert.title}
                </h3>
                <p className="order__details-info-description">
                  {specialDessert.description}
                </p>
                <h4 className="order__details-info-price">
                  N{specialDessert.price} per pack
                </h4>
              </div>
              <div className="order__details-quantity">
                <div className="order__details-quantity-controls">
                  <p className="order__details-quantity-controls-text">Packs</p>
                  <div className="order__details-quantity-controls-counter">
                    <img
                      onClick={() => increase(specialDessert._id)}
                      src={add}
                      alt="Add to cart"
                    />
                    <h4 className="order__details-quantity-counter-value">
                      {specialDessert.count}
                    </h4>
                    <img
                      onClick={() => decrease(specialDessert._id)}
                      src={remove}
                      alt="Remove from cart"
                    />
                  </div>
                </div>
                <div className="order__details-quantity-buttons">
                  <button
                    onClick={() => addSpecialDesserts(specialDessert._id)}
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

export default SpecialDessertOrder;

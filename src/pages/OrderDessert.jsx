import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import OrderMenu from "/src/components/OrderMenu.jsx";
import { DataContext } from "/src/components/DataProvider";

import add from "/src/assets/icons/plus.svg";
import remove from "/src/assets/icons/minus.svg";

function OrderDessert() {
  const { id } = useParams();
  const value = useContext(DataContext);

  const addOrderDesserts = value.addOrderDesserts;
  const [orderDesserts, setOrderDesserts] = value.orderDesserts;
  const orderDessertMeal = orderDesserts.filter((orderDessert, index) => {
    return orderDessert._id === id;
  });

  // INCREMENT AND DECREMENT OF ORDER DESSERT PACKS
  const decrease = (id) => {
    orderDesserts.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setOrderDesserts([...orderDesserts]);
  };

  const increase = (id) => {
    orderDesserts.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setOrderDesserts([...orderDesserts]);
  };

  return (
    <div>
      <div className="menu">
        {orderDessertMeal.map((orderDessert) => (
          <section key={orderDessert._id} className="order">
            <div className="order__image">
              <img src={orderDessert.image} alt={orderDessert.alt} />
            </div>
            <div className="order__details">
              <div className="order__details-info">
                <h3 className="order__details-info-name">
                  {orderDessert.title}
                </h3>
                <p className="order__details-info-description">
                  {orderDessert.description}
                </p>
                <h4 className="order__details-info-price">
                  N{orderDessert.price} per pack
                </h4>
              </div>
              <div className="order__details-quantity">
                <div className="order__details-quantity-controls">
                  <p className="order__details-quantity-controls-text">Packs</p>
                  <div className="order__details-quantity-controls-counter">
                    <img
                      onClick={() => increase(orderDessert._id)}
                      src={add}
                      alt="Add to cart"
                    />
                    <h4 className="order__details-quantity-counter-value">
                      {orderDessert.count}
                    </h4>
                    <img
                      onClick={() => decrease(orderDessert._id)}
                      src={remove}
                      alt="Remove from cart"
                    />
                  </div>
                </div>
                <div className="order__details-quantity-buttons">
                  <button
                    onClick={() => addOrderDesserts(orderDessert._id)}
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

export default OrderDessert;

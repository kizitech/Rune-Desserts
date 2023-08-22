import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "/src/components/DataProvider";

function OrderMenu() {
  const { id } = useParams();
  const value = useContext(DataContext);
  const [orderDesserts, setOrderDesserts] = value.orderDesserts;

  return (
    <div>
      <section className="food-cards">
        <div className="food-card__container">
          {orderDesserts.map((orderDessert, i) => {
            return (
              <div key={i} className="food-card">
                <Link
                  to={`/menu/order-dessert/${orderDessert._id}`}
                  className="food-card__image-card"
                  title="View Product"
                >
                  <img
                    className="food-card__image"
                    src={orderDessert.image}
                    alt="Delicious Delicacy"
                  />
                </Link>

                <div className="food-card__content">
                  <h2 className="food-card__title">{orderDessert.title}</h2>
                  <h3 className="food-card__price">N{orderDessert.price}</h3>
                  <Link
                    className="food-card__button"
                    to={`/menu/order-dessert/${orderDessert._id}`}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default OrderMenu;

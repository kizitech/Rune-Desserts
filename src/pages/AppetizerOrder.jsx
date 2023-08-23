import React, { useContext } from "react";
import OrderMenu from "/src/components/OrderMenu.jsx";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "/src/components/DataProvider";

import add from "/src/assets/icons/plus.svg";
import remove from "/src/assets/icons/minus.svg";

function appetizersOrder() {
  const { id } = useParams();
  const value = useContext(DataContext);

  const addAppetizers = value.addAppetizers;
  const [appetizers, setAppetizers] = value.appetizers;
  const appetizerMeal = appetizers.filter((appetizer, index) => {
    return appetizer._id === id;
  });

  // INCREMENT AND DECREMENT OF APPETIZER PACKS
  const decrease = (id) => {
    appetizers.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setAppetizers([...appetizers]);
  };

  const increase = (id) => {
    appetizers.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setAppetizers([...appetizers]);
  };

  return (
    <div>
      <div className="menu">
        {appetizerMeal.map((appetizer) => (
          <section key={appetizer._id} className="order">
            <div className="order__image">
              <img src={appetizer.image} alt={appetizer.alt} />
            </div>
            <div className="order__details">
              <div className="order__details-info">
                <h3 className="order__details-info-name">{appetizer.title}</h3>
                <p className="order__details-info-description">
                  {appetizer.description}
                </p>
                <h4 className="order__details-info-price">
                  N{appetizer.price} per pack
                </h4>
              </div>
              <div className="order__details-quantity">
                <div className="order__details-quantity-controls">
                  <p className="order__details-quantity-controls-text">Packs</p>
                  <div className="order__details-quantity-controls-counter">
                    <img
                      onClick={() => increase(appetizer._id)}
                      src={add}
                      alt="Add to cart"
                    />
                    <h4 className="order__details-quantity-counter-value">
                      {appetizer.count}
                    </h4>
                    <img
                      onClick={() => decrease(appetizer._id)}
                      src={remove}
                      alt="Remove from cart"
                    />
                  </div>
                </div>
                <div className="order__details-quantity-buttons">
                  <button
                    onClick={() => addAppetizers(appetizer._id)}
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

export default appetizersOrder;

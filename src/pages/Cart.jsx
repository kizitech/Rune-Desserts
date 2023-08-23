import { Link } from "react-router-dom";
import { DataContext } from "/src/components/DataProvider";
import React, { useContext, useState, useEffect } from "react";

import add from "/src/assets/icons/plus.svg";
import star from "/src/assets/icons/star.svg";
import remove from "/src/assets/icons/minus.svg";

function Cart() {
  const value = useContext(DataContext);
  const [cart, setCart] = value.cart;
  const [total, setTotal] = useState(0);

  // GET TOTAL
  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.count;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [cart]);

  // INCREMENT AND DECREMENT OF CART ITEM
  const decrease = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    setCart([...cart]);
  };

  const increase = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    setCart([...cart]);
  };

  // REMOVE CART ITEM
  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product from your cart?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  // EMPTY CART
  if (cart.length === 0)
    return (
      <>
        <div className="cart-empty">
          <h2>Your Cart Is Empty</h2>
          <Link to="/menu">
            <button type="button">Start Ordering</button>
          </Link>
        </div>
      </>
    );

  return (
    <main className="cart">
      <div className="cart__header">
        <h1>My Cart List</h1>
      </div>
      {cart.map((meal) => (
        <section key={meal._id} className="cart__item">
          <div className="cart__item-image">
            <img src={meal.image} alt={meal.alt} />
          </div>
          <div className="cart__item-details">
            <div>
              <h2 className="cart__item-details-name">{meal.title}</h2>
              <p className="cart__item-details-price">
                <strong>N{meal.price}</strong> per pack
              </p>
              <div className="cart__item-details-quantity">
                <img
                  src={add}
                  alt="Add to cart"
                  onClick={() => increase(meal._id)}
                />
                <h4>{meal.count}</h4>
                <img
                  src={remove}
                  alt="Remove from cart"
                  onClick={() => decrease(meal._id)}
                />
              </div>
            </div>
            <div className="cart__item-details-rating">
              <img src={star} alt="star rating" />
              <p>5.0</p>
            </div>
            <button
              title="Remove item from cart"
              className="cart__item-details-remove"
              onClick={() => removeProduct(meal._id)}
            >
              X
            </button>
          </div>
        </section>
      ))}
      ;
      <section className="cart__summary">
        <div className="cart__summary-subtotal">
          <div>
            <h2>Sub Total</h2>
            <p>N{total}</p>
          </div>
          <div>
            <h2>Delivery</h2>
            <p>N1500</p>
          </div>
        </div>
        <hr />
        <div className="cart__summary-total">
          <h2>Total</h2>
          <p>N{total + 1500}</p>
        </div>

        <div className="cart__summary-checkout">
          <Link to="/menu/delivery" className="cart__summary-checkout-link">
            <p>Check Out</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M16.1716 11.4999L10.8076 6.13589L12.2218 4.72168L20 12.4999L12.2218 20.278L10.8076 18.8638L16.1716 13.4999H4V11.4999H16.1716Z"
                fill="#2d2d2d"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Cart;

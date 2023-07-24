import React from 'react'
import { Link } from 'react-router-dom';
import cartList from '../components/items/cart'
import { useCart } from 'react-use-cart';
function Cart() {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  return (
    <main className="cart">
      <div className="cart__header">
        <h1>My Cart List</h1>
      </div>
      <section className="cart__item">
        <div className="cart__item-image">
          <img src="src/assets/images/menu/Rectangle 6.png" alt="Delicious Meal" />
        </div>
        <div className="cart__item-details">
          <div>
            <h2 className="cart__item-details-name">Bean Cake with sauce</h2>
            <p className="cart__item-details-price">
              <strong>N3,000</strong> per pack
            </p>
            <div className="cart__item-details-quantity">
              <img src="src/assets/icons/plus.svg" alt="Add to cart" />
              <h4>01</h4>
              <img src="src/assets/icons/minus.svg" alt="Remove from cart" />
            </div>
          </div>
          <div className="cart__item-details-rating">
            <img src="src/assets/icons/star.svg" alt="star rating" />
            <p>5.0</p>
          </div>
        </div>
      </section>

      <section className="cart__summary">
        <div className="cart__summary-subtotal">
          <div>
            <h2>Sub Total</h2>
            <p>N12,500</p>
          </div>
          <div>
            <h2>Delivery</h2>
            <p>N1,000</p>
          </div>
        </div>
        <hr />
        <div className="cart__summary-total">
          <h2>Total</h2>
          <p>N13,500</p>
        </div>
        
        <div className="cart__summary-checkout">
          <Link to="/delivery" className="cart__summary-checkout-link">
            <p>Check Out</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
              <path d="M16.1716 11.4999L10.8076 6.13589L12.2218 4.72168L20 12.4999L12.2218 20.278L10.8076 18.8638L16.1716 13.4999H4V11.4999H16.1716Z" fill="#2d2d2d" />
            </svg>
          </Link>
        </div>
      </section>
    </main>

  )
}

export default Cart
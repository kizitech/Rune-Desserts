import React from "react";
import { Link } from "react-router-dom";

function Delivery() {
  return (
    <main className="delivery">
      <div className="delivery__header">
        <h1 className="delivery__header-text">Delivery Address</h1>
      </div>
      <section className="delivery__section">
        <div className="delivery__address">
          <h3 className="delivery__address-title">Home Address</h3>
          <p className="delivery__address-details">
            No 26 Ademola, Adetokumbo Str, Victoria Island, Lagos state.
          </p>
          <div class="delivery__address-radio">
            <label class="checkBox">
              <input type="checkbox" id="ch1" />
              <div class="transition"></div>
            </label>
          </div>
        </div>
        <div className="delivery__address">
          <h3 className="delivery__address-title">Office Address</h3>
          <p className="delivery__address-details">
            No 16 Saheed Sanni Str, Ajah, Lagos state.
          </p>
        </div>
      </section>
      <section className="delivery__buttons">
        <button type="submit" className="delivery__button">
          Add New Delivery Address
        </button>
        <Link to="/menu/payment-method" className="delivery__button">
          <button type="submit">Proceed to Payment</button>
        </Link>
      </section>
    </main>
  );
}

export default Delivery;

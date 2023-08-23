import React from "react";
import { Link } from "react-router-dom";
import checkMark from "/src/assets/images/payment/successful.png";

function PaymentSuccessful() {
  return (
    <main class="payment-success">
      <div>
        <div class="payment-success__content">
          <section class="payment-success__section">
            <div class="payment-success__image">
              <img
                src={checkMark}
                alt="Payment Successful"
              />
            </div>
            <div class="payment-success__details">
              <h2 class="payment-success__title">Payment Successful</h2>
              <div class="payment-success__message">
                <p>Your payment was successful</p>
                <p>Wait for your order to arrive</p>
              </div>
            </div>
            <Link to="/" class="payment-success__button">
              <button class="payment-success__button-text">Go back home</button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}

export default PaymentSuccessful;

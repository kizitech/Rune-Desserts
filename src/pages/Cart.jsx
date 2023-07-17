import React from 'react'
import { Link } from 'react-router-dom';
import cart from '../components/items/cart'

function Cart() {
  return (
    <main className='cart'>
      <div>
        <div>
          <h1>My Cart List</h1>
        </div>
        <section></section>
        <section>
          <div>
            <div>
              <h2>Sub Total</h2>
              <p>N12, 500</p>
            </div>
            <div>
              <h2>Delivery</h2>
              <p>N1, 000</p>
            </div>
          </div>
          <div>
            <h2>Total</h2>
            <p>N13, 500</p>
          </div>
          <div>
            <Link to='/delivery'>
              <p>Check Out</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M16.1716 11.4999L10.8076 6.13589L12.2218 4.72168L20 12.4999L12.2218 20.278L10.8076 18.8638L16.1716 13.4999H4V11.4999H16.1716Z" fill="black" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Cart
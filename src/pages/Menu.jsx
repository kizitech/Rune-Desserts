import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { specialDesserts, appetizers, veganDesserts } from '../components/items/menu'


function Menu() {

  const [searchTerm, setSearchTerm] = useState("");

  const { addItem, items } = useCart();
  console.log(items)
  return (
    <>
      <div className="menu">
        <div className="menu-title">
          <h3 className="menu-title__heading">Dessert Menu</h3>
        </div>

        <div className='menu-search'>
          <div className="input-container">
            <input type="text" name="search" className="input" placeholder="search..." onChange={(event) => {
              setSearchTerm(event.target.value);
            }} />
            <span className="icon">
              <img src="src/assets/icons/search.svg" alt="Search icon" />
            </span>
          </div>
        </div>

        <section className="food-cards">
          <h4 className='food-card__heading'>Special Menu</h4>
          <div className='food-card__container'>
            {specialDesserts

              .filter((val) => {
                if (searchTerm == "NOT AVALIABLE") {
                  return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })

              .map((card1) => {
                return (
                  <div key={card1.id} className="food-card">
                    <div className="food-card__image-card">
                      <img className="food-card__image" src={card1.image} alt="Delicious Delicacy" />
                    </div>

                    <div className="food-card__content">
                      <h2 className="food-card__title">{card1.title}</h2>
                      <h3 className="food-card__price">{card1.price}</h3>
                      <Link to="/order" className="food-card__button"><button onClick={() => addItem(card1.id)}>View Product</button></Link>
                      {/* <button onClick={() => addItem(card1)}>Add to cart</button> */}
                    </div>
                  </div>
                );

              })}
          </div>
        </section>

        <section className="food-cards">
          <h4 className='food-card__heading'>Appetizers</h4>

          <div className='food-card__container'>
            {appetizers

              .filter((val) => {
                if (searchTerm == "NOT AVALIABLE") {
                  return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })

              .map((card2) => {
                return (
                  <div key={card2.id} className="food-card">
                    <div className="food-card__image">
                      <img src={card2.image} alt="Delicious Delicacy" />
                    </div>

                    <div className="food-card__content">
                      <h2 className="food-card__title">{card2.title}</h2>
                      <h3 className="food-card__price">{card2.price}</h3>
                      <Link to="/order" className="food-card__button"><button onClick={() => addItem(card2.id)}>View Product</button></Link>
                    </div>
                  </div>
                );

              })}
          </div>
        </section>

        <section className="food-cards">
          <h4 className='food-card__heading'>Vegan Desserts</h4>

          <div className='food-card__container'>
            {veganDesserts

              .filter((val) => {
                if (searchTerm == "NOT AVALIABLE") {
                  return val;
                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })

              .map((card3, i) => {
                return (
                  <div key={i} className="food-card">
                    <div className="food-card__image">
                      <img src={card3.image} alt="Delicious Delicacy" />
                    </div>

                    <div className="food-card__content">
                      <h2 className="food-card__title">{card3.title}</h2>
                      <h3 className="food-card__price">{card3.price}</h3>
                      <Link to="/order" className="food-card__button"><button onClick={() => addItem(card3.id)}>View Product</button></Link>
                    </div>
                  </div>
                );

              })}
          </div>
        </section>

        <div className="menu-cta">
          <button className="menu-cta__btn">
            <p className="menu-cta__word">Delivery</p>
            <p className="menu-image"><img src="src/assets/icons/phone.png" alt="phone icon" /></p>
            <p className="menu-cta__word">+234 8 234 9090</p>
          </button>
        </div>
      </div>
    </>
  );


}

export default Menu
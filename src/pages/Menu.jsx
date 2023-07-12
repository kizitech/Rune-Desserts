import React from 'react'
import { specialMenu, appetizers, veganDesserts } from '../components/items/menu'


function Menu() {

  return (
    <>
      <div className="menu">
        <div className="menu-title">
          <h3 className="menu-title__heading">Dessert Menu</h3>
        </div>

        <section className="food-cards">
          <h4 className='food-card__heading'>Special Menu</h4>
          <div className='food-card__container'>
            {specialMenu.map((card1, i) => {
            return (
              <div key={i} className="food-card">
                <div className="food-card__image-card">
                  <img className="food-card__image" src={card1.image} alt="Delicious Delicacy" />
                </div>

                <div className="food-card__content">
                  <h2 className="food-card__title">{card1.title}</h2>
                  <h3 className="food-card__price">{card1.price}</h3>
                  <button className="food-card__button">View Product</button>
                </div>
              </div>
            );

          })}
          </div>
        </section>

        <section className="food-cards">
          <h4 className='food-card__heading'>Appetizers</h4>
          
          <div className='food-card__container'>
            {appetizers.map((card2, i) => {
              return (
                <div key={i} className="food-card">
                  <div className="food-card__image">
                    <img src={card2.image} alt="Delicious Delicacy" />
                  </div>

                  <div className="food-card__content">
                    <h2 className="food-card__title">{card2.title}</h2>
                    <h3 className="food-card__price">{card2.price}</h3>
                    <button className="food-card__button">View Product</button>
                  </div>
                </div>
              );

            })}
          </div>
        </section>

        <section className="food-cards">
          <h4 className='food-card__heading'>Vegan Desserts</h4>
          
          <div className='food-card__container'>
            {veganDesserts.map((card3, i) => {
              return (
                <div key={i} className="food-card">
                  <div className="food-card__image">
                    <img src={card3.image} alt="Delicious Delicacy" />
                  </div>

                  <div className="food-card__content">
                    <h2 className="food-card__title">{card3.title}</h2>
                    <h3 className="food-card__price">{card3.price}</h3>
                    <button className="food-card__button">View Product</button>
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
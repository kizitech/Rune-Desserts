import React from 'react'
import { ourProduct, specialDessert, popularCategories } from '../components/items/home'


function Home() {
  return (
    <>
      <div>

        <section>
          <section className="food-cards">
            <h4 className='food-card__heading'>Special Menu</h4>
            <div className='food-card__container'>
              {ourProduct.map((card1, i) => {
                return (
                  <div key={i} className="food-card">
                    <div className="food-card__image-card">
                      <img className="food-card__image" src={card1.image} alt="Delicious Delicacy" />
                    </div>

                    <div className="food-card__content">
                      <h2 className="food-card__title">{card1.title}</h2>
                    </div>
                  </div>
                );

              })}
            </div>
          </section>

          <section className="food-cards">
            <h4 className='food-card__heading'>Appetizers</h4>

            <div className='food-card__container'>
              {specialDessert.map((card2, i) => {
                return (
                  <div key={i} className="food-card">
                    <div className="food-card__image">
                      <img src={card2.image} alt="Delicious Delicacy" />
                    </div>

                    <div className="food-card__content">
                      <h2 className="food-card__title">{card2.title}</h2>
                    </div>
                  </div>
                );

              })}
            </div>
          </section>

          <section className="food-cards">
            <h4 className='food-card__heading'>Vegan Desserts</h4>

            <div className='food-card__container'>
              {popularCategories.map((card3, i) => {
                return (
                  <div key={i} className="food-card">
                    <div className="food-card__image">
                      <img src={card3.image} alt="Delicious Delicacy" />
                    </div>

                    <div className="food-card__content">
                      <h2 className="food-card__title">{card3.title}</h2>
                    </div>
                  </div>
                );

              })}
            </div>
          </section>
        </section>

      </div>
    </>
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom';
import Order from '../components/items/order'


function order() {
    return (
        <div>
            <div className="menu">
                <section className="food-cards">
                    <div className='food-card__container'>
                        {Order.map((card1, i) => {
                            return (
                                <div key={i} className="food-card">
                                    <div className="food-card__image-card">
                                        <img className="food-card__image" src={card1.image} alt="Delicious Delicacy" />
                                    </div>

                                    <div className="food-card__content">
                                        <h2 className="food-card__title">{card1.title}</h2>
                                        <h3 className="food-card__price">{card1.price}</h3>
                                        <Link to="/cart" className="food-card__button"><button>Add to cart</button></Link>
                                    </div>
                                </div>
                            );

                        })}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default order
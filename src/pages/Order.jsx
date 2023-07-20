import React from 'react'
import { Link } from 'react-router-dom';
import Order from '../components/items/order'


function order() {
    return (
        <div>
            <div className="menu">
                <section className="order">
                    <div className="order__image">
                        <img src="src/assets/images/order/Rectangle 6 (5).png" alt="Delicious Delicacy" />
                    </div>
                    <div className="order__details">
                        <div className="order__details-info">
                            <h3 className="order__details-info-name">Bean Cake</h3>
                            <p className="order__details-info-description">Bite into the fluffy, sweet Bean Cake (Akara), and savor the amazing flavor it delivers.</p>
                            <h4 className="order__details-info-price">N3000 per pack</h4>
                        </div>
                        <div className="order__details-quantity">
                            <p className="order__details-quantity-text">Packs</p>
                            <div className="order__details-quantity-controls">
                                <img src="src/assets/icons/minus.svg" alt="Remove from cart" />
                                <h4 className="order__details-quantity-value">02</h4>
                                <img src="src/assets/icons/plus.svg" alt="Add to cart" />
                            </div>
                            <div className="order__details-quantity-buttons">
                                <button className="order__details-quantity-buttons-add">Add to cart</button>
                                <Link to="/cart" className="order__details-quantity-buttons-buy">
                                    <button>Buy now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="food-cards">
                    <div className='food-card__container'>
                        {Order.map((card, i) => {
                            return (
                                <div key={i} className="food-card">
                                    <div className="food-card__image-card">
                                        <img className="food-card__image" src={card.image} alt="Delicious Delicacy" />
                                    </div>

                                    <div className="food-card__content">
                                        <h2 className="food-card__title">{card.title}</h2>
                                        <h3 className="food-card__price">{card.price}</h3>
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
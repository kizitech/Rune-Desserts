import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <header className="header">
            <section className="header__section">
                <div className="header__logo">
                    <Link to="/" className="header__logo-link">
                        <img src="src/assets/icons/logo.png" alt="rune deserts logo" className="header__logo-image" />
                    </Link>
                </div>

                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item"><Link to="/" className="header__nav-link">Home</Link></li>
                        <li className="header__nav-item"><Link to="/about" className="header__nav-link">About</Link></li>
                        <li className="header__nav-item"><Link to="/menu" className="header__nav-link">Menu</Link></li>
                        <li className="header__nav-item"><Link to="/blog" className="header__nav-link">Blog</Link></li>
                    </ul>
                </nav>

                <div className="header__actions">
                    <ul className="header__actions-list">
                        <li className="header__actions-item">
                            <Link to="/contact" className="header__actions-link">Contact</Link>
                        </li>
                        <li className="header__cart">
                            <Link to="/cart">
                                <img src="src/assets/icons/cart.png" alt="add to cart" className="header__cart-image" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mobile-section">
                    <div className={click ? "overlay" : { handleClick }} onClick={handleClick}></div>
                    <div className="mobile-header__cart menu-icon">
                        <Link to="/cart">
                            <img src="src/assets/icons/cart.png" alt="add to cart" className="mobile-header__cart-image" />
                        </Link>
                    </div>

                    <div className="menu-icon">
                        <img onClick={handleClick} className="open-icon" src="src/assets/icons/open-menu.png" alt="open menu icon" />
                    </div>

                    <nav className={click ? "mobile-header__nav active" : "mobile-header__nav"}>
                        <div className="menu-icon">
                            <img src="src/assets/icons/close-menu.svg" onClick={handleClick} alt="close menu icon" />
                        </div>
                        <ul className="mobile-header__nav-list">
                            <Link to="/" className={click ? "mobile-header__nav-link" : { handleClick }} onClick={handleClick}><li className="mobile-header__nav-item">Home</li></Link>
                            <Link to="/about" className={click ? "mobile-header__nav-link" : { handleClick }} onClick={handleClick}><li className="mobile-header__nav-item">About</li></Link>
                            <Link to="/menu" className={click ? "mobile-header__nav-link" : { handleClick }} onClick={handleClick}><li className="mobile-header__nav-item">Menu</li></Link>
                            <Link to="/blog" className={click ? "mobile-header__nav-link" : { handleClick }} onClick={handleClick}><li className="mobile-header__nav-item">Blog</li></Link>
                            <Link to="/contact" className={click ? "mobile-header__nav-link" : { handleClick }} onClick={handleClick}><li className="mobile-header__nav-item">Contact</li></Link>
                        </ul>
                    </nav>
                </div>
            </section>
        </header>
    );
}

export default NavBar;

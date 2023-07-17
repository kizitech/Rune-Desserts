import React from 'react'

function Delivery() {
    return (
        <main className="delivery">
            <div className="delivery__header">
                <div className="delivery__title">
                    <h1 className="delivery__title-text">Delivery Address</h1>
                </div>
            </div>
            <section className="delivery__section">
                <div className="delivery__address">
                    <h3 className="delivery__address-title">Home Address</h3>
                    <p className="delivery__address-details">No 26 Ademola, Adetokumbo Str, Victoria Island, Lagos state.</p>
                    <input type="radio" name="radio" id="radio" className="delivery__address-radio" />
                </div>
                <div className="delivery__address">
                    <h3 className="delivery__address-title">Office Address</h3>
                    <p className="delivery__address-details">No 16 Saheed Sanni Str, Ajah, Lagos state.</p>
                </div>
            </section>
        </main>
    );
}

export default Delivery
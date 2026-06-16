import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

/**
 * Cart - Full cart page with item list, quantity controls, and order summary
 * Displays all cart items with images, prices, quantity adjustment,
 * subtotals, and a checkout summary sidebar
 */
function Cart({ cartItems = [], onIncrease, onDecrease, onRemove }) {
  const total = cartItems.reduce((sum, p) => sum + p.price * p.qty, 0);
  const itemCount = cartItems.reduce((sum, p) => sum + p.qty, 0);

  return (
    <div className="main-content">
      <div className="section-container">
        <div style={{ padding: '2rem 0 1rem' }}>
          <h2 className="section-title">
            <i className="fas fa-shopping-cart" style={{ marginRight: '10px' }}></i>
            Shopping Cart
          </h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <i className="fas fa-shopping-bag"></i>
            <p>Your cart is empty</p>
            <Link to="/" className="continue-shopping-btn">
              <i className="fas fa-arrow-left"></i>
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-page">
            {/* Cart Items */}
            <div className="cart-items-section">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card">
                  <img src={item.thumbnail || item.image} alt={item.name || item.title} />
                  <div className="cart-item-details">
                    <h4>{item.name || item.title}</h4>
                    <span className="cart-item-price">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="cart-item-actions">
                    <div className="in-cart-controls">
                      <button className="qty-btn" onClick={() => onDecrease && onDecrease(item.id)}>−</button>
                      <span className="qty-display">{item.qty}</span>
                      <button className="qty-btn" onClick={() => onIncrease && onIncrease(item.id)}>+</button>
                    </div>
                    <span className="cart-item-subtotal">${(item.price * item.qty).toFixed(2)}</span>
                    <button
                      className="cart-remove-btn"
                      onClick={() => onRemove && onRemove(item.id)}
                      aria-label={`Remove ${item.name || item.title}`}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Items</span>
                <span>{itemCount}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span style={{ color: 'var(--success)' }}>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="checkout-btn" disabled={cartItems.length === 0}>
                <i className="fas fa-lock"></i>
                Checkout
              </button>
              <Link
                to="/"
                className="continue-shopping-btn"
                style={{ marginTop: '0.8rem', display: 'flex', justifyContent: 'center' }}
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;

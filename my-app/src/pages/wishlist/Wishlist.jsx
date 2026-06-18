import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../compoments/Productcard';
import Footer from '../../compoments/Footer';
import products from '../../js/products';

/**
 * Wishlist - Page displaying all wishlisted products
 * Shows products that have been added to the wishlist (stored in localStorage)
 * Allows removal and adding to cart directly from this page
 */
function Wishlist({
  wishlist = [],
  onToggleWishlist,
  onAddToCart,
  cartItems = [],
  onIncrease,
  onDecrease
}) {
  // Get full product objects for wishlisted IDs
  const wishlistProducts = products.filter(p => wishlist.includes(p.id));

  return (
    <div className="main-content">
      <div className="section-container">
        <section className="wishlist-section">
          <div className="wishlist-header">
            <h2 className="section-title">
              <i className="fas fa-heart" style={{ marginRight: '10px', color: 'var(--warm)' }}></i>
              My Wishlist
            </h2>
            <span className="product-count">
              {wishlistProducts.length} item{wishlistProducts.length !== 1 ? 's' : ''}
            </span>
          </div>

          {wishlistProducts.length === 0 ? (
            <div className="wishlist-empty">
              <i className="far fa-heart"></i>
              <p>Your wishlist is empty</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                Browse products and click the heart icon to save favorites
              </p>
              <Link
                to="/"
                className="continue-shopping-btn"
                style={{ marginTop: '1.5rem', display: 'inline-flex' }}
              >
                <i className="fas fa-arrow-left"></i>
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="product-grid">
              {wishlistProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  isWishlisted={true}
                  onToggleWishlist={onToggleWishlist}
                  animationDelay={index}
                />
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ProductCard - Premium product card with hover effects, wishlist, and cart controls
 * Features: image zoom on hover, translateY(-8px) elevation, quick view button,
 * wishlist heart toggle, star ratings, fade-in animation, badge display
 */
function ProductCard({
  product,
  onAddToCart,
  cartItems = [],
  onIncrease,
  onDecrease,
  isWishlisted = false,
  onToggleWishlist,
  animationDelay = 0
}) {
  const inCart = cartItems.find((p) => p.id === product.id);

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i === fullStars && hasHalf) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star empty"></i>);
      }
    }
    return stars;
  };

  return (
    <div
      className="product-card"
      style={{ animationDelay: `${animationDelay * 0.06}s` }}
    >
      {/* Image section */}
      <div className="product-card-image">
        <Link to={`/Product/${product.id}`}>
          <img
            src={product.image || product.thumbnail}
            alt={product.name || product.title}
            loading="lazy"
          />
        </Link>

        {/* Product badge (Sale / New / Popular) */}
        {product.badge && (
          <span className={`product-badge ${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}

        {/* Out of stock overlay */}
        {product.inStock === false && (
          <div className="out-of-stock-overlay">
            <span className="out-of-stock-text">Out of Stock</span>
          </div>
        )}

        {/* Wishlist heart button */}
        <button
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onToggleWishlist && onToggleWishlist(product.id);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <i className={isWishlisted ? 'fas fa-heart' : 'far fa-heart'}></i>
        </button>

        {/* Quick View button (appears on hover) */}
        <button className="quick-view-btn" onClick={(e) => e.stopPropagation()}>
          <i className="fas fa-eye" style={{ marginRight: '6px' }}></i>
          Quick View
        </button>
      </div>

      {/* Card body */}
      <div className="product-card-body">
        <Link to={`/Product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <h3 className="product-card-name">{product.name || product.title}</h3>
        </Link>

        <div className="product-card-meta">
          <span className="product-card-price">
            ${(product.price || 0).toFixed(2)}
          </span>
          <div className="product-card-rating">
            <div className="star-rating">
              {renderStars(product.rating || 0)}
            </div>
            <span className="review-count">
              ({product.reviewCount || 0})
            </span>
          </div>
        </div>

        {/* Add to Cart or Qty controls */}
        {!inCart ? (
          <button
            className="add-to-cart-btn"
            disabled={product.inStock === false}
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            <i className="fas fa-shopping-bag"></i>
            {product.inStock === false ? 'Out of Stock' : 'Add to Cart'}
          </button>
        ) : (
          <div className="in-cart-controls">
            <button
              className="qty-btn"
              onClick={() => onDecrease && onDecrease(product.id)}
            >
              −
            </button>
            <span className="qty-display">Qty: {inCart.qty}</span>
            <button
              className="qty-btn"
              onClick={() => onIncrease && onIncrease(product.id)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;

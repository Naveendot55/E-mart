import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../js/products';
import Footer from '../../compoments/Footer';

/**
 * Product - Product detail page showing full product information
 * Uses local products.js data instead of API call
 */
function Product({
  onAddToCart,
  cartItems = [],
  onIncrease,
  onDecrease,
  wishlist = [],
  onToggleWishlist
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find product from local data
  const product = useMemo(() =>
    products.find(p => p.id === Number(id)),
    [id]
  );

  const inCart = cartItems.find((p) => p.id === product?.id);
  const isWishlisted = wishlist.includes(product?.id);

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

  if (!product) {
    return (
      <div className="main-content">
        <div className="section-container" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <i className="fas fa-exclamation-circle" style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '1rem', display: 'block' }}></i>
          <h2 style={{ color: 'var(--text-muted)' }}>Product not found</h2>
          <button
            className="continue-shopping-btn"
            style={{ marginTop: '1.5rem' }}
            onClick={() => navigate('/')}
          >
            <i className="fas fa-arrow-left"></i>
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="section-container">
        <div className="product-detail-page">
          {/* Product Image */}
          <div className="product-detail-images">
            <img
              src={product.image}
              alt={product.name}
              style={{ borderRadius: '16px', maxHeight: '500px', objectFit: 'cover' }}
            />
          </div>

          {/* Product Info */}
          <div className="product-detail-info">
            {/* Badge */}
            {product.badge && (
              <span
                className={`product-badge ${product.badge.toLowerCase()}`}
                style={{ position: 'static', display: 'inline-block', width: 'fit-content' }}
              >
                {product.badge}
              </span>
            )}

            <h1>{product.name}</h1>

            {/* Rating */}
            <div className="product-card-rating" style={{ fontSize: '1rem' }}>
              <div className="star-rating" style={{ fontSize: '1rem' }}>
                {renderStars(product.rating)}
              </div>
              <span className="review-count" style={{ fontSize: '0.9rem' }}>
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <span className="detail-price">${product.price.toFixed(2)}</span>

            <span className="detail-category">
              <i className="fas fa-tag" style={{ marginRight: '6px' }}></i>
              {product.category}
            </span>

            <p className="detail-description">{product.description}</p>

            {/* Stock status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: product.inStock ? 'var(--success)' : 'var(--danger)',
                display: 'inline-block'
              }}></span>
              <span style={{
                color: product.inStock ? 'var(--success)' : 'var(--danger)',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              {!inCart ? (
                <button
                  className="add-to-cart-btn"
                  style={{ maxWidth: '250px' }}
                  disabled={!product.inStock}
                  onClick={() => onAddToCart && onAddToCart(product)}
                >
                  <i className="fas fa-shopping-bag"></i>
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              ) : (
                <div className="in-cart-controls" style={{ maxWidth: '200px' }}>
                  <button className="qty-btn" onClick={() => onDecrease && onDecrease(product.id)}>−</button>
                  <span className="qty-display">Qty: {inCart.qty}</span>
                  <button className="qty-btn" onClick={() => onIncrease && onIncrease(product.id)}>+</button>
                </div>
              )}

              <button
                className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
                style={{
                  position: 'static',
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)'
                }}
                onClick={() => onToggleWishlist && onToggleWishlist(product.id)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <i className={isWishlisted ? 'fas fa-heart' : 'far fa-heart'}></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import products from '../../js/products';

/**
 * Storenavbar - Premium navigation bar with search, cart dropdown, and wishlist
 * Features: Live search with autocomplete, mini cart dropdown, wishlist count,
 * responsive hamburger menu, scroll-aware background
 */
function Storenavbar({ cartCount = 0, cartItems = [], onRemoveFromCart, wishlistCount = 0 }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef(null);
  const miniCartRef = useRef(null);
  const debounceTimer = useRef(null);

  // Track scroll position for navbar background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
      if (miniCartRef.current && !miniCartRef.current.contains(e.target)) {
        setShowMiniCart(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /**
   * Live search with 300ms debounce for performance optimization
   * Filters products by name (case-insensitive)
   */
  const handleSearchInput = useCallback((e) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      if (value.trim()) {
        const filtered = products.filter(p =>
          p.name.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filtered);
        setShowResults(true);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);
  }, []);

  // Navigate to product when autocomplete item is clicked
  const handleSelectProduct = (product) => {
    setQuery('');
    setShowResults(false);
    navigate(`/Product/${product.id}`);
  };

  // Calculate cart total
  const cartTotal = useMemo(() =>
    cartItems.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cartItems]
  );

  return (
    <nav className={`emart-navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Brand Logo */}
      <Link to="/" className="navbar-brand" onClick={() => setMobileMenuOpen(false)}>
        E‑mart
      </Link>

      {/* Hamburger menu button for mobile */}
      <button
        className="hamburger-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Center section with search */}
      <div className={`navbar-center ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="search-container" ref={searchRef}>
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={query}
            onChange={handleSearchInput}
            onFocus={() => query.trim() && setShowResults(true)}
            aria-label="Search products"
            id="search-input"
          />

          {/* Autocomplete dropdown */}
          {showResults && (
            <div className="autocomplete-dropdown">
              {searchResults.length > 0 ? (
                searchResults.map(product => (
                  <div
                    key={product.id}
                    className="autocomplete-item"
                    onClick={() => handleSelectProduct(product)}
                  >
                    <img src={product.thumbnail} alt={product.name} />
                    <div className="autocomplete-item-info">
                      <div className="autocomplete-item-name">{product.name}</div>
                      <div className="autocomplete-item-price">${product.price.toFixed(2)}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="autocomplete-no-results">
                  <i className="fas fa-search" style={{ marginRight: '8px' }}></i>
                  No products found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right actions: wishlist & cart */}
      <div className="navbar-actions">
        {/* Wishlist button */}
        <Link to="/Wishlist" className="nav-action-btn" aria-label="Wishlist" id="wishlist-nav-btn">
          <i className="fas fa-heart"></i>
          {wishlistCount > 0 && <span className="nav-badge">{wishlistCount}</span>}
        </Link>

        {/* Cart button with mini cart dropdown */}
        <div style={{ position: 'relative' }} ref={miniCartRef}>
          <button
            className="nav-action-btn"
            onClick={() => setShowMiniCart(!showMiniCart)}
            aria-label="Shopping cart"
            id="cart-nav-btn"
          >
            <i className="fas fa-shopping-bag"></i>
            {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
          </button>

          {/* Mini Cart Dropdown */}
          {showMiniCart && (
            <div className="mini-cart-dropdown">
              <div className="mini-cart-header">
                <h4>Shopping Cart</h4>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  {cartCount} item{cartCount !== 1 ? 's' : ''}
                </span>
              </div>

              {cartItems.length === 0 ? (
                <div className="mini-cart-empty">
                  <i className="fas fa-shopping-bag"></i>
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="mini-cart-items">
                    {cartItems.map(item => (
                      <div key={item.id} className="mini-cart-item">
                        <img src={item.thumbnail || item.image} alt={item.name || item.title} />
                        <div className="mini-cart-item-info">
                          <div className="mini-cart-item-name">{item.name || item.title}</div>
                          <div className="mini-cart-item-meta">
                            {item.qty} × ${item.price.toFixed(2)}
                          </div>
                        </div>
                        <button
                          className="mini-cart-item-remove"
                          onClick={() => onRemoveFromCart && onRemoveFromCart(item.id)}
                          aria-label={`Remove ${item.name || item.title}`}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mini-cart-footer">
                    <div className="mini-cart-total">
                      <span>Total</span>
                      <span className="mini-cart-total-value">${cartTotal.toFixed(2)}</span>
                    </div>
                    <Link
                      to="/MyCart"
                      className="checkout-btn"
                      style={{ textDecoration: 'none' }}
                      onClick={() => setShowMiniCart(false)}
                    >
                      <i className="fas fa-shopping-cart"></i>
                      View Cart
                    </Link>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Storenavbar;

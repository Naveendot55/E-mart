import React, { useMemo, useState, useEffect, useCallback } from 'react';
import './css/styles.css';
import Home from './pages/home/Home';
import Storenavbar from './compoments/navbar/Storenavbar';
import Product from './pages/products/Product';
import Wishlist from './pages/wishlist/Wishlist';
import Cart from './compoments/cartpage/Cart';
import BackToTop from './compoments/BackToTop';
import { ToastContainer, showToast } from './compoments/Toast';
import { Navigate, Route, Routes } from 'react-router-dom';

/**
 * App - Root component managing global state for cart and wishlist
 *
 * Cart System:
 * - addToCart(product): Adds product to cart, stores in localStorage, shows toast
 * - removeFromCart(id): Removes item, updates localStorage and UI
 * - updateCartUI(): Cart count badge and mini cart dropdown update automatically
 * - Cart persists after page refresh using localStorage
 *
 * Wishlist System:
 * - toggleWishlist(productId): Adds/removes product ID from wishlist array
 * - Stored in localStorage for persistence
 */
const App = () => {
  // ==================== CART STATE (with localStorage persistence) ====================

  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('emart-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('emart-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  /**
   * addToCart - Adds a product to the cart array
   * If already in cart, increments quantity. Shows toast notification.
   */
  function addToCart(product) {
    if (!product || !product.id) return;
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`Added to cart!`);
  }

  /**
   * updateQty - Updates quantity of a cart item by delta (+1 or -1)
   * Removes item if quantity reaches 0
   */
  function updateQty(id, delta) {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p
        )
        .filter((p) => p.qty > 0)
    );
  }

  /**
   * removeFromCart - Removes an item from the cart entirely
   * Updates localStorage and UI
   */
  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  }

  // updateCartUI - Cart count badge updates automatically via useMemo
  const cartCount = useMemo(
    () => cartItems.reduce((sum, p) => sum + p.qty, 0),
    [cartItems]
  );

  // ==================== WISHLIST STATE (with localStorage persistence) ====================

  // Initialize wishlist from localStorage
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('emart-wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('emart-wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  /**
   * toggleWishlist - Toggles a product in the wishlist
   * Adds if not present, removes if already wishlisted
   * Shows appropriate toast notification
   */
  const toggleWishlist = useCallback((productId) => {
    setWishlist(prev => {
      const isWishlisted = prev.includes(productId);
      if (isWishlisted) {
        showToast('Removed from wishlist', 'wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Added to wishlist!', 'wishlist');
        return [...prev, productId];
      }
    });
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <Storenavbar
        cartCount={cartCount}
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
        wishlistCount={wishlist.length}
      />

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onAddToCart={addToCart}
              cartItems={cartItems}
              onIncrease={(id) => updateQty(id, 1)}
              onDecrease={(id) => updateQty(id, -1)}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          }
        />
        <Route
          path="/Product/:id"
          element={
            <Product
              onAddToCart={addToCart}
              cartItems={cartItems}
              onIncrease={(id) => updateQty(id, 1)}
              onDecrease={(id) => updateQty(id, -1)}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          }
        />
        <Route
          path="/MyCart"
          element={
            <Cart
              cartItems={cartItems}
              onIncrease={(id) => updateQty(id, 1)}
              onDecrease={(id) => updateQty(id, -1)}
              onRemove={removeFromCart}
            />
          }
        />
        <Route
          path="/Wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
              onAddToCart={addToCart}
              cartItems={cartItems}
              onIncrease={(id) => updateQty(id, 1)}
              onDecrease={(id) => updateQty(id, -1)}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Toast notifications */}
      <ToastContainer />

      {/* Back to top button */}
      <BackToTop />
    </div>
  );
};

export default App;

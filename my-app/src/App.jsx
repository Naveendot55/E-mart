import React, { useMemo, useState } from "react";
import "./App.css";
import Home from "./pages/home/Home";
import Storenavbar from "./compoments/navbar/Storenavbar";
import Product from "./pages/products/Product";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./compoments/cartpage/Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

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
  }

  function updateQty(id, delta) {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p
        )
        .filter((p) => p.qty > 0)
    );
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((p) => p.id !== id));
  }

  const cartCount = useMemo(
    () => cartItems.reduce((sum, p) => sum + p.qty, 0),
    [cartItems]
  );

  return (
      <div style={{ overflow: "hidden" }}>
        <Storenavbar cartCount={cartCount} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAddToCart={addToCart}
                cartItems={cartItems}
                onIncrease={(id) => updateQty(id, 1)}
                onDecrease={(id) => updateQty(id, -1)}
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
  );
};

export default App;

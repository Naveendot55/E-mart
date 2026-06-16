import React, { useState, useCallback, useEffect, useRef } from 'react';

/**
 * ToastProvider & useToast - Toast notification system
 * Shows "Added to cart!" and "Added to wishlist!" notifications
 * that auto-dismiss after 2.8 seconds with slide-in/out animation
 */

// Simple event-based toast system
let toastListeners = [];

export function showToast(message, type = 'cart') {
  toastListeners.forEach(fn => fn({ message, type, id: Date.now() }));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef({});

  useEffect(() => {
    const listener = (toast) => {
      setToasts(prev => [...prev, toast]);
      // Auto-remove after 2.8s (matching CSS animation)
      timersRef.current[toast.id] = setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== toast.id));
        delete timersRef.current[toast.id];
      }, 2800);
    };

    toastListeners.push(listener);
    return () => {
      toastListeners = toastListeners.filter(fn => fn !== listener);
      // Cleanup all timers
      Object.values(timersRef.current).forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`toast ${toast.type === 'wishlist' ? 'toast-wishlist' : ''}`}
        >
          <i className={`fas ${toast.type === 'wishlist' ? 'fa-heart' : 'fa-check-circle'}`}></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}

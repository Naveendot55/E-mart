import React, { useState, useEffect, useMemo, useCallback } from 'react';
import HeroCarousel from '../../compoments/caro/Carousel';
import ProductCard from '../../compoments/Productcard';
import SkeletonCard from '../../compoments/SkeletonCard';
import Footer from '../../compoments/Footer';
import products from '../../js/products';

/**
 * Home - Main landing page with hero carousel, category filtering,
 * product grid, sorting, price range filter, and skeleton loading
 *
 * renderProducts(category) filters the products array and generates
 * product cards with fade-in animations
 */

// Category definitions for the filter pills
const categories = [
  { label: 'All', value: 'all' },
  { label: 'Women', value: 'women' },
  { label: 'Men', value: 'men' },
  { label: 'Food', value: 'food' }
];

// Sort options
const sortOptions = [
  { label: 'Default', value: 'default' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating: High to Low', value: 'rating-desc' }
];

function Home({
  onAddToCart,
  cartItems = [],
  onIncrease,
  onDecrease,
  wishlist = [],
  onToggleWishlist
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [maxPrice, setMaxPrice] = useState(300);
  const [loading, setLoading] = useState(true);
  const [gridKey, setGridKey] = useState(0); // Forces re-render for animation

  // Find the maximum price across all products for the slider range
  const absoluteMaxPrice = useMemo(() =>
    Math.ceil(Math.max(...products.map(p => p.price))),
    []
  );

  // Simulate initial loading with skeleton cards (1 second delay)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  /**
   * renderProducts - Core function that filters, sorts, and renders products
   * @param {string} category - Category filter ('all', 'women', 'men', 'food')
   * Applies category filter, price range filter, and sort order
   */
  const filteredProducts = useMemo(() => {
    // Step 1: Filter by category
    let result = activeCategory === 'all'
      ? [...products]
      : products.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

    // Step 2: Filter by price range
    result = result.filter(p => p.price <= maxPrice);

    // Step 3: Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy, maxPrice]);

  // Handle category change with loading transition
  const handleCategoryChange = useCallback((category) => {
    setLoading(true);
    setActiveCategory(category);
    setGridKey(prev => prev + 1); // Reset animation
    // Brief skeleton loading effect for category transitions
    setTimeout(() => setLoading(false), 500);
  }, []);

  // Calculate slider value percentage for the gradient fill
  const sliderPercent = ((maxPrice / absoluteMaxPrice) * 100).toFixed(0);

  return (
    <div className="main-content">
      {/* Hero Carousel */}
      <HeroCarousel />

      <div className="section-container">
        {/* Categories Section */}
        <section className="categories-section">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-fire" style={{ marginRight: '10px', color: 'var(--warm)' }}></i>
              Explore Products
            </h2>
            <div className="category-pills">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  className={`category-pill ${activeCategory === cat.value ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.value)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filter & Sort Bar */}
          <div className="filter-sort-bar">
            <div className="filter-group">
              {/* Price Range Filter */}
              <span className="filter-label">
                <i className="fas fa-sliders-h" style={{ marginRight: '6px' }}></i>
                Price Range:
              </span>
              <div className="price-range-container">
                <input
                  type="range"
                  className="price-slider"
                  min="0"
                  max={absoluteMaxPrice}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  style={{ '--value-percent': `${sliderPercent}%` }}
                  aria-label="Maximum price filter"
                  id="price-range-slider"
                />
                <span className="price-value">≤ ${maxPrice}</span>
              </div>
            </div>

            <div className="filter-group">
              {/* Product count */}
              <span className="product-count">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </span>

              {/* Sort Dropdown */}
              <select
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
                id="sort-dropdown"
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid" key={gridKey}>
            {loading ? (
              // Skeleton loading cards
              Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={`skeleton-${i}`} />
              ))
            ) : filteredProducts.length > 0 ? (
              // Render actual product cards with staggered animation
              filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  cartItems={cartItems}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  isWishlisted={wishlist.includes(product.id)}
                  onToggleWishlist={onToggleWishlist}
                  animationDelay={index}
                />
              ))
            ) : (
              // No products found message
              <div style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '4rem 2rem',
                color: 'var(--text-muted)'
              }}>
                <i className="fas fa-search" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}></i>
                <p style={{ fontSize: '1.1rem' }}>No products found matching your filters.</p>
                <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Try adjusting the price range or category.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;

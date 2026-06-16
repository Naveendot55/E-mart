import React from 'react';

/**
 * SkeletonCard - Shimmer loading placeholder for product cards
 * Shows while products are loading to prevent layout shift
 */
function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-body">
        <div className="skeleton-line medium"></div>
        <div className="skeleton-line short"></div>
        <div className="skeleton-line btn"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;

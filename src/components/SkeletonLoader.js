import React from 'react';
import '../css/SkeletonLoader.css'; // Import the CSS file for the loader

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-card">
        <div className="skeleton-navbar"></div>
        <div className='skeleton-heading'>
          <div className="skeleton-s"></div>
          <div className="skeleton-m"></div>
        </div>
        <div className="skeleton-content">
          <div className="skeleton-line short"></div>
          <div className="skeleton-line medium"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;


import React from 'react';
import '../css/SkeletonHero.css'; 

const SkeletonHero = () => {
  return (
    <div className="skeleton-hero-container">
      <div className="skeleton-hero-card">
        <div className="skeleton-hero-navbar"></div>
        <div className='skeleton-hero-heading'>
          <div className="skeleton-hero-s"></div>
          <div className="skeleton-hero-m"></div>
        </div>
        <div className="skeleton-hero-content">
          <div className="skeleton-hero-line short"></div>
          <div className="skeleton-hero-line medium"></div>
        </div>
        <div className="skeleton-hero-mdhead">
          <div className="skeleton-hero-line mdhead"></div>
        </div>
        <div className="skeleton-hero-carousel">
          <div className="skeleton-hero-line carousel"></div>
        </div>
        <div className="skeleton-hero-quote">
          <div className="skeleton-hero-line quote"></div>
        </div>
        <div className="skeleton-hero-footerhead">
          <div className="skeleton-hero-line footer"></div>
        </div>
        <div className="skeleton-hero-footershead">
          <div className="skeleton-hero-line footer"></div>
        </div>
        <div className="skeleton-hero-contactbtn">
          <div className="skeleton-hero-line footer"></div>
        </div>
        <div className="skeleton-hero-profile">
          <div className="skeleton-hero-line footer"></div>
        </div>
        <div className="skeleton-hero-services">
          <div className="skeleton-hero-line footer"></div>
        </div>
        <div className="skeleton-hero-social">
          <div className="skeleton-hero-line footer"></div>
        </div>
        <div className="skeleton-hero-codeanimation">
          <div className="skeleton-hero-line footer"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonHero;


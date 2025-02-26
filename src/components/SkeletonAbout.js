import React from 'react';
import '../css/SkeletonAbout.css'; 

const skeletonProjects = () => {
  return (
    <div className="skeleton-about-container">
      <div className="skeleton-about-card">
        <div className="skeleton-about-navbar"></div>
        <div className='skeleton-about-heading'>
          <div className="skeleton-about-s"></div>
          <div className="skeleton-about-html"></div>
          <div className="skeleton-about-css"></div>
          <div className="skeleton-about-sql"></div>
          <div className="skeleton-about-js"></div>
          <div className="skeleton-about-react"></div>
          <div className="skeleton-about-java"></div>
          <div className="skeleton-about-git"></div>
          <div className="skeleton-about-codepen"></div>
          <div className="skeleton-about-spring"></div>
          <div className="skeleton-about-glider"></div>
        </div>
      </div>
    </div>
  );
};

export default skeletonProjects;


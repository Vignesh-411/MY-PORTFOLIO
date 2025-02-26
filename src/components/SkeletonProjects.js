import React from 'react';
import '../css/SkeletonProjects.css'; 

const skeletonProjects = () => {
  return (
    <div className="skeleton-projects-container">
      <div className="skeleton-projects-card">
        <div className="skeleton-projects-navbar"></div>
        <div className='skeleton-projects-heading'>
          <div className="skeleton-projects-s"></div>
          
        </div>
        <div className="skeleton-projects-content">
          <div className="skeleton-projects-line prev-next"></div>
          <div className="skeleton-projects-line prev"></div>
          <div className="skeleton-projects-line main"></div>
          <div className="skeleton-projects-line next"></div>
          <div className="skeleton-projects-line next-next"></div>
        </div>
      </div>
    </div>
  );
};

export default skeletonProjects;


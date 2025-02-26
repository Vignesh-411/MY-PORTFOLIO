import React from 'react';
import '../css/SkeletonContact.css'; 

const skeletonContact = () => {
  return (
    <div className="skeleton-contact-container">
      <div className="skeleton-contact-card">
        <div className="skeleton-contact-navbar"></div>
        <div className='skeleton-contact-heading'>
          <div className="skeleton-contact-s"></div>
          <div className="skeleton-contact-s"></div>
      </div>
      </div>
    </div>
  );
};

export default skeletonContact;


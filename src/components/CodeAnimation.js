import React from 'react';
import '../css/CodeAnimation.css';

const CodeAnimation = () => {
  return (
    <div className="loader-container">
    <div className="group-1">
      <div className="linee linee1">
        <div className="dash dash-1 exp-40 div"></div>
        <div className="dash dash-2 exp-70 class-name"></div>
        <div className="dash dash-3 exp-110 class"></div>
        <div className="dash dash-4 exp-70 class"></div>
      </div>
      <div className="linee linee2">
        <div className="dash dash-1 exp-40 div"></div>
        <div className="dash dash-2 exp-70 class-name"></div>
        <div className="dash dash-3 exp-90 class"></div>
      </div>
      <div className="linee linee3">
        <div className="dash dash-1 exp-300 par"></div>
      </div>
      <div className="linee linee4">
        <div className="dash dash-1 exp-200 par"></div>
      </div>
      <div className="linee linee5">
        <div className="dash dash-1 exp-40 div"></div>
      </div>
      <div className="linee linee6">
        <div className="dash dash-1 exp-40 div"></div>
      </div>
    </div>
    <div className="group-2">
      <div className="linee linee1">
        <div className="dash dash-1 div"></div>
        <div className="dash dash-2 class-name"></div>
        <div className="dash dash-3 class"></div>
        <div className="dash dash-4 class"></div>
      </div>
      <div className="linee linee2">
        <div className="dash dash-1 div"></div>
        <div className="dash dash-2 exp70 class-name"></div>
        <div className="dash dash-3 exp90 class"></div>
      </div>
      <div className="linee linee3">
        <div className="dash dash-1 par"></div>
      </div>
      <div className="linee linee4">
        <div className="dash dash-1 par"></div>
      </div>
      <div className="linee linee5">
        <div className="dash dash-1 div"></div>
      </div>
      <div className="linee linee6">
        <div className="dash dash-1 div"></div>
      </div>
    </div>
  </div>  );
};

export default CodeAnimation;

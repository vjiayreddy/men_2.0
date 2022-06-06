import React from "react";

const AnimatedCirclesComponent = () => {
  return (
    <div className="animated_loading">
      <div className="lds-ellipsis">
        <div className="circleBg_1"></div>
        <div className="circleBg_2"></div>
        <div className="circleBg_3"></div>
        <div className="circleBg_1"></div>
      </div>
    </div>
  );
};

export default AnimatedCirclesComponent;

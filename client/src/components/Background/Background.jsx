import React from "react";
import "./Background.css";

const Background = () => {
  return (
    <div className="background-container">
      <div className="svg-decorations">
        <svg
          className="svg-overlay"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
        >
          <defs>
            <radialGradient id="golden-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#A67C00" />
            </radialGradient>
          </defs>
          <path
            d="M50 50 C150 250 650 250 750 50"
            stroke="url(#golden-glow)"
            strokeWidth="15"
            fill="none"
          />
          <circle
            cx="400"
            cy="400"
            r="150"
            fill="none"
            stroke="gold"
            strokeWidth="10"
          />
        </svg>
      </div>
      <div className="center-element">
        <div className="golden-circle">
          <span className="playing-card">A♠</span>
        </div>
      </div>
      <div className="floating-card heart">♥</div>
      <div className="floating-card club">♣</div>
      <div className="floating-card diamond">♦</div>
    </div>
  );
};

export default Background;

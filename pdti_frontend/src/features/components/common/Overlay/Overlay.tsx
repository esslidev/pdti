import React from "react";
import "./Overlay.css";

interface OverlayProps {
  isVisible: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ isVisible, onClick, children }) => {
  if (!isVisible) return null;

  return (
    <div className="overlay" onClick={onClick}>
      <div
        className="overlay-content"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        {children}
      </div>
    </div>
  );
};

export default Overlay;

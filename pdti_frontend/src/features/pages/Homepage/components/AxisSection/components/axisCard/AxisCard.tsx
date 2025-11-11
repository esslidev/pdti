import React from "react";
import "./AxisCard.css";

interface AxisCardProps {
  axisTitle: string;
  description: string;
  imageUrl: string;
  onClick: () => void; // optional click handler
}

const AxisCard: React.FC<AxisCardProps> = ({
  axisTitle,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <div className="axis-card" onClick={onClick}>
      <div className="axis-card-header">
        <h2 className="axis-card-title">{axisTitle}</h2>
      </div>
      <div className="axis-card-body">
        <p className="axis-card-description">{description}</p>
      </div>
      <div className="axis-card-image-container">
        <img src={imageUrl} alt={description} className="axis-card-image" />
      </div>
    </div>
  );
};

export default AxisCard;

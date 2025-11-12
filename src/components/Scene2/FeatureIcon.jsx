import React from 'react'

function FeatureIcon({ feature, isExplored, onClick }) {
  return (
    <button 
      className={`feature-icon ${isExplored ? 'explored' : ''}`}
      onClick={() => onClick(feature)}
    >
      <div className="icon">
        <img src={feature.icon} alt={feature.name} className="feature-image" />
      </div>
      <span>{feature.name}</span>
    </button>
  )
}

export default FeatureIcon
import React from 'react'

function FeatureCard({ feature, onClose }) {
  return (
    <div className="card-overlay" onClick={onClose}>
      <div className="card-content" onClick={e => e.stopPropagation()}>
        <div className="card-header">
          <div className="card-icon">
            <img src={feature.icon} alt={feature.name} className="feature-image" />
          </div>
          <h3>{feature.name}</h3>
        </div>
        <p className="feature-description">{feature.description}</p>
        <div className="value-prop">
          {feature.valueProp.split('\n').map((line, index) => (
            <div key={index} className="value-line">{line}</div>
          ))}
        </div>
        <div className="differentiator">
          <strong>Key Differentiator:</strong> {feature.differentiator}
        </div>
        <div className="ai-tip">
          <span className="ai-badge">AI Assist</span> {feature.aiTip}
        </div>
        <button onClick={onClose} className="btn btn-primary btn-small">Got it</button>
      </div>
    </div>
  )
}

export default FeatureCard
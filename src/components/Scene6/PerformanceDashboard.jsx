import React, { useState, useEffect } from 'react'

const metrics = [
  { id: 'ramp', label: 'Average Ramp Time', value: 22, suffix: '%', direction: 'down', color: '#10b981' },
  { id: 'fluency', label: 'Product Fluency', value: 35, suffix: '%', direction: 'up', color: '#3b82f6' },
  { id: 'winrate', label: 'Win Rate', value: 18, suffix: '%', direction: 'up', color: '#8b5cf6' }
]

function PerformanceDashboard({ onAnimationsComplete }) {
  const [animatedMetrics, setAnimatedMetrics] = useState([])

  useEffect(() => {
    metrics.forEach((metric, index) => {
      setTimeout(() => {
        setAnimatedMetrics(prev => [...prev, metric.id])
        if (index === metrics.length - 1) {
          setTimeout(() => onAnimationsComplete(), 1000)
        }
      }, index * 800)
    })
  }, [onAnimationsComplete])

  return (
    <div className="performance-dashboard">
      <div className="dashboard-grid">
        {metrics.map((metric) => (
          <div 
            key={metric.id} 
            className={`metric-card ${animatedMetrics.includes(metric.id) ? 'animated' : ''}`}
          >
            <div className="metric-header">
              <span className="metric-label">{metric.label}</span>
              <span className={`metric-direction ${metric.direction}`}>
                {metric.direction === 'up' ? 'UP' : 'DOWN'}
              </span>
            </div>
            <div className="metric-value" style={{ color: metric.color }}>
              {metric.direction === 'up' ? '+' : '-'}{metric.value}{metric.suffix}
            </div>
            <div className="metric-bar">
              <div 
                className="metric-progress" 
                style={{ 
                  backgroundColor: metric.color,
                  width: animatedMetrics.includes(metric.id) ? `${metric.value + 20}%` : '0%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      
      <div className="dashboard-insight">
        <p>This is how data-driven enablement drives results.</p>
      </div>
    </div>
  )
}

export default PerformanceDashboard
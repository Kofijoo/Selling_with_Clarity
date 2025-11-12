import React from 'react'

const updates = [
  {
    id: 1,
    title: 'Enhanced Compliance Engine',
    date: 'December 2024',
    type: 'Feature',
    description: 'Automated compliance monitoring now covers 15 additional countries with real-time regulatory updates.',
    impact: 'Reduces compliance risk by 40% for global teams'
  },
  {
    id: 2,
    title: 'AI-Powered Payroll Optimization',
    date: 'November 2024',
    type: 'Enhancement',
    description: 'Machine learning algorithms now optimize payroll processing times and detect anomalies automatically.',
    impact: 'Improves processing speed by 60%'
  },
  {
    id: 3,
    title: 'Advanced HRIS Integration',
    date: 'October 2024',
    type: 'Integration',
    description: 'Seamless integration with 50+ popular HRIS platforms including Workday, BambooHR, and custom systems.',
    impact: 'Reduces implementation time by 50%'
  },
  {
    id: 4,
    title: 'Global Benefits Marketplace',
    date: 'September 2024',
    type: 'New Product',
    description: 'Comprehensive benefits platform offering localized options across 80+ countries with vendor management.',
    impact: 'Increases employee satisfaction by 35%'
  }
]

function ProductUpdates({ onComplete, onBack }) {
  return (
    <div className="product-updates">
      <div className="updates-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <h3>Product Launch Updates</h3>
        <p>Latest features and improvements to highlight in sales conversations</p>
      </div>

      <div className="updates-timeline">
        {updates.map(update => (
          <div key={update.id} className="update-card">
            <div className="update-header">
              <div className="update-type">{update.type}</div>
              <div className="update-date">{update.date}</div>
            </div>
            
            <h4>{update.title}</h4>
            <p className="update-description">{update.description}</p>
            
            <div className="update-impact">
              <strong>Sales Impact:</strong> {update.impact}
            </div>
          </div>
        ))}
      </div>

      <div className="updates-actions">
        <button onClick={onComplete} className="btn btn-primary btn-medium">
          Continue
        </button>
      </div>
    </div>
  )
}

export default ProductUpdates
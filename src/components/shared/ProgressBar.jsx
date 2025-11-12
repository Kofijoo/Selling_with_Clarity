import React from 'react'

function ProgressBar({ progress, total }) {
  const percentage = (progress / total) * 100

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="progress-text">{progress}/{total} features explored</span>
    </div>
  )
}

export default ProgressBar
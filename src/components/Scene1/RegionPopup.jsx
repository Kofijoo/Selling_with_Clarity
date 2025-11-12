import React from 'react'

function RegionPopup({ region, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <h3>{region.name}</h3>
        <p>"{region.quote}"</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default RegionPopup
import React, { useState } from 'react'
import RegionPopup from './RegionPopup'
import SalesRepAvatar from './SalesRepAvatar'
import worldMap from '../../assets/map_new.png'

const regions = [
  { id: 'emea', name: 'EMEA', quote: 'Clients love Josh Agyekum, but explaining compliance in multiple countries is tricky.', character: 'sales_rep_Europe' },
  { id: 'apac', name: 'APAC', quote: 'I need faster ways to learn about new features.', character: 'sales_rep_Asia' },
  { id: 'latam', name: 'LATAM', quote: 'Handling objections takes time, I need better examples.', character: 'sales_rep_North_America_blob' }
]

function InteractiveMap({ onAllRegionsExplored }) {
  const [exploredRegions, setExploredRegions] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(null)

  const handleRegionClick = (regionId) => {
    const region = regions.find(r => r.id === regionId)
    if (!region) return
    
    setSelectedRegion(region)
    
    if (!exploredRegions.includes(region.id)) {
      const newExplored = [...exploredRegions, region.id]
      setExploredRegions(newExplored)
      
      if (newExplored.length === 3) {
        onAllRegionsExplored()
      }
    }
  }

  return (
    <div className="interactive-map">
      <div className="map-header">
        <h2>Global Sales Challenge</h2>
        <p className="map-instructions">Click each region to discover how sales reps tackle challenges around the world.</p>
        <div className="scene-progress">
          {exploredRegions.length}/3 regions explored • Scene 1 of 5
          {exploredRegions.length === 3 && (
            <div className="completion-message">
              ✅ All regions explored! Ready to continue.
            </div>
          )}
        </div>
      </div>
      <div className="world-map">
        <div className="map-background">
          <img 
            src={worldMap} 
            alt="World Map" 
            className="map-image"
          />
          <div className="clickable-regions">
            <div 
              className={`region-hotspot emea ${exploredRegions.includes('emea') ? 'explored' : ''}`}
              onClick={() => handleRegionClick('emea')}
            />
            <div 
              className={`region-hotspot apac ${exploredRegions.includes('apac') ? 'explored' : ''}`}
              onClick={() => handleRegionClick('apac')}
            />
            <div 
              className={`region-hotspot latam ${exploredRegions.includes('latam') ? 'explored' : ''}`}
              onClick={() => handleRegionClick('latam')}
            />
          </div>
        </div>
      </div>
      
      <div className="sales-rep-avatars">
        {regions.map(region => (
          <SalesRepAvatar
            key={region.id}
            character={region.character}
            region={region.id}
            onClick={() => handleRegionClick(region.id)}
          />
        ))}
      </div>
      
      {selectedRegion && (
        <RegionPopup 
          region={selectedRegion} 
          onClose={() => setSelectedRegion(null)} 
        />
      )}
    </div>
  )
}

export default InteractiveMap
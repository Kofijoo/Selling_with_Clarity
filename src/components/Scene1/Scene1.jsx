import React, { useState } from 'react'
import WelcomeScreen from './WelcomeScreen'
import InteractiveMap from './InteractiveMap'

function Scene1({ onSceneComplete }) {
  const [showMap, setShowMap] = useState(false)
  const [allRegionsExplored, setAllRegionsExplored] = useState(false)

  const handleStartLearning = () => {
    setShowMap(true)
  }

  const handleAllRegionsExplored = () => {
    setAllRegionsExplored(true)
  }

  const handleContinue = () => {
    onSceneComplete()
  }

  return (
    <div className="scene1">
      {!showMap ? (
        <WelcomeScreen onStartLearning={handleStartLearning} />
      ) : (
        <>
          <InteractiveMap onAllRegionsExplored={handleAllRegionsExplored} />
          <div className="next-button-container">
            {allRegionsExplored && (
              <button onClick={handleContinue} className="cta-button">
                Continue to Product Overview →
              </button>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Scene1
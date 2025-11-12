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

  const handleFixTogether = () => {
    onSceneComplete()
  }

  return (
    <div className="scene1">
      {!showMap ? (
        <WelcomeScreen onStartLearning={handleStartLearning} />
      ) : (
        <>
          <InteractiveMap onAllRegionsExplored={handleAllRegionsExplored} />
          {allRegionsExplored && (
            <button onClick={handleFixTogether} className="cta-button">
              Let's Fix This Together
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default Scene1
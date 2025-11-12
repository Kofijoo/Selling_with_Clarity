import React, { useState, useEffect } from 'react'
import PerformanceDashboard from './PerformanceDashboard'
import FinalActions from './FinalActions'
import scene6Image from '../../assets/scene6_image.png'

function Scene6({ onSceneComplete }) {
  const [showDashboard, setShowDashboard] = useState(false)
  const [animationsComplete, setAnimationsComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDashboard(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const handleAnimationsComplete = () => {
    setAnimationsComplete(true)
  }

  return (
    <div className="scene6">
      <div className="scene6-content">
        <div className="scene6-left">
          <div className="impact-header">
            <h2>From Learning to Impact</h2>
            <p>This is how great enablement drives performance — smarter, faster, everywhere.</p>
          </div>

          {showDashboard && (
            <PerformanceDashboard onAnimationsComplete={handleAnimationsComplete} />
          )}

          {animationsComplete && (
            <FinalActions onComplete={onSceneComplete} />
          )}
        </div>
        
        <div className="scene6-right">
          <img src={scene6Image} alt="Performance Analytics" className="scene6-image" />
        </div>
      </div>
    </div>
  )
}

export default Scene6
import React, { useState } from 'react'
import Button from '../shared/Button'

function ExamplePitch({ onContinue }) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // Simulate 20-second video
    setTimeout(() => {
      setIsPlaying(false)
    }, 20000)
  }

  const examplePitch = `"Hi, I'm Sarah from Josh Agyekum. I know scaling globally feels overwhelming - the compliance maze, payroll complexities, and legal risks can paralyze growth. 

Josh Agyekum eliminates those barriers. We're your single platform for hiring, paying, and managing talent in 100+ countries, all while staying compliant. 

Companies like yours typically expand 40% faster and cut compliance costs by 60%. Instead of months of legal setup, you're hiring in new markets within days.

Ready to turn global expansion from your biggest headache into your competitive advantage?"`

  return (
    <div className="example-pitch">
      <div className="pitch-header">
        <h3>Example: Perfect 60-Second Pitch</h3>
        <p>Watch how a top performer delivers the message</p>
      </div>

      <div className="video-mockup">
        <div className={`video-player ${isPlaying ? 'playing' : ''}`}>
          {!isPlaying ? (
            <div className="video-thumbnail">
              <div className="play-button" onClick={handlePlay}>
                ▶️
              </div>
              <div className="video-info">
                <span>Sarah Chen - Top Performer</span>
                <span>20 seconds</span>
              </div>
            </div>
          ) : (
            <div className="video-playing">
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
              <p>🎥 Playing example pitch...</p>
            </div>
          )}
        </div>
      </div>

      <div className="pitch-transcript">
        <h4>Transcript:</h4>
        <div className="transcript-text">
          {examplePitch}
        </div>
      </div>

      <div className="key-elements">
        <h4>Key Elements:</h4>
        <ul>
          <li><strong>Pain Point First:</strong> "compliance maze, payroll complexities"</li>
          <li><strong>Clear Solution:</strong> "single platform for 100+ countries"</li>
          <li><strong>Specific Benefits:</strong> "40% faster, 60% cost savings"</li>
          <li><strong>Strong Close:</strong> "competitive advantage"</li>
        </ul>
      </div>

      <Button onClick={onContinue} variant="primary" size="large">
        Continue to Toolkit
      </Button>
    </div>
  )
}

export default ExamplePitch
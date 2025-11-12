import React from 'react'
import jaLogo from '../../assets/ja_logo.png'

function WelcomeScreen({ onStartLearning }) {
  return (
    <div className="welcome-screen">
      <div className="logo-header">
        <img src={jaLogo} alt="JA Logo" className="logo-image" />
      </div>
      <h1>Selling Smarter, Everywhere.</h1>
      <p>Our sellers work across 150+ countries, but our message doesn't always sound the same. Let's align on what makes <span className="brand-name">Josh Agyekum</span> unbeatable.</p>
      <button onClick={onStartLearning} className="cta-button">
        Start Learning
      </button>
    </div>
  )
}

export default WelcomeScreen
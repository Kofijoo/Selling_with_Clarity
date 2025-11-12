import React, { useState } from 'react'
import PitchInput from './PitchInput'
import AIFeedback from './AIFeedback'
import ExamplePitch from './ExamplePitch'

function Scene4({ onSceneComplete }) {
  const [currentStep, setCurrentStep] = useState('input') // 'input', 'feedback', 'example'
  const [userPitch, setUserPitch] = useState('')
  const [showExample, setShowExample] = useState(false)

  const handlePitchSubmit = (pitch) => {
    setUserPitch(pitch)
    setCurrentStep('feedback')
  }

  const handleShowExample = () => {
    setShowExample(true)
    setCurrentStep('example')
  }

  const handleContinue = () => {
    onSceneComplete()
  }

  return (
    <div className="scene4">
      <div className="pitch-header">
        <h2>Your 60-Second Pitch</h2>
        <p>Imagine you're speaking to a CFO of a remote-first startup</p>
      </div>

      {currentStep === 'input' && (
        <PitchInput onSubmit={handlePitchSubmit} />
      )}

      {currentStep === 'feedback' && (
        <AIFeedback 
          userPitch={userPitch}
          onShowExample={handleShowExample}
          onContinue={handleContinue}
        />
      )}

      {currentStep === 'example' && (
        <ExamplePitch onContinue={handleContinue} />
      )}
    </div>
  )
}

export default Scene4
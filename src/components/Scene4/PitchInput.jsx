import React, { useState } from 'react'
import Button from '../shared/Button'

function PitchInput({ onSubmit }) {
  const [pitch, setPitch] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  const handleSubmit = () => {
    if (pitch.trim()) {
      onSubmit(pitch)
    }
  }

  const handleRecord = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Simulate recording
      setTimeout(() => {
        setIsRecording(false)
        setPitch("Hi, I'm with Josh Agyekum. We help remote-first companies like yours manage global teams effortlessly. Our platform handles payroll, compliance, and HR across 100+ countries, so you can hire the best talent anywhere without the legal headaches. Companies typically see 40% faster international expansion and save 60% on compliance costs. Want to see how we can help you scale globally?")
      }, 3000)
    }
  }

  return (
    <div className="pitch-input">
      <div className="input-section">
        <div className="ai-coach-sidebar">
          <div className="coach-avatar">🤖</div>
          <h3>AI Coach DeelBot</h3>
          <p>Ready to help you craft the perfect pitch!</p>
        </div>

        <div className="pitch-form">
          <div className="input-options">
            <div className="text-input">
              <label>Type your pitch:</label>
              <textarea
                value={pitch}
                onChange={(e) => setPitch(e.target.value)}
                placeholder="Start with your value proposition..."
                rows={8}
                disabled={isRecording}
              />
            </div>

            <div className="record-option">
              <p>Or record your pitch:</p>
              <button 
                className={`record-button ${isRecording ? 'recording' : ''}`}
                onClick={handleRecord}
              >
                {isRecording ? '🔴 Recording...' : '🎤 Record Pitch'}
              </button>
            </div>
          </div>

          <Button 
            onClick={handleSubmit}
            disabled={!pitch.trim()}
            variant="primary"
            size="large"
          >
            Get AI Feedback
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PitchInput
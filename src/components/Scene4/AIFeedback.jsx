import React from 'react'
import Button from '../shared/Button'

function AIFeedback({ userPitch, onShowExample, onContinue }) {
  // Analyze pitch for feedback (simplified logic)
  const hasGlobalMention = userPitch.toLowerCase().includes('global') || userPitch.toLowerCase().includes('international')
  const hasComplianceMention = userPitch.toLowerCase().includes('compliance') || userPitch.toLowerCase().includes('legal')
  const hasPainPoint = userPitch.toLowerCase().includes('problem') || userPitch.toLowerCase().includes('challenge') || userPitch.toLowerCase().includes('headache')

  return (
    <div className="ai-feedback">
      <div className="feedback-header">
        <div className="coach-avatar">🤖</div>
        <h3>AI Coach Feedback</h3>
      </div>

      <div className="feedback-card">
        <div className="feedback-items">
          <div className="feedback-item positive">
            <span className="feedback-icon">✅</span>
            <div className="feedback-text">
              <strong>Strong start:</strong> {hasGlobalMention ? 'Clear on Josh Agyekum\'s global reach' : 'Good opening hook'}
            </div>
          </div>

          <div className="feedback-item warning">
            <span className="feedback-icon">⚠️</span>
            <div className="feedback-text">
              <strong>Improve:</strong> {hasComplianceMention ? 'Great compliance mention!' : 'Add more detail on compliance automation'}
            </div>
          </div>

          <div className="feedback-item tip">
            <span className="feedback-icon">💡</span>
            <div className="feedback-text">
              <strong>Tip:</strong> {hasPainPoint ? 'Excellent use of pain points!' : 'Use customer pain points up front'}
            </div>
          </div>
        </div>

        <div className="feedback-score">
          <div className="score-circle">
            <span className="score-number">
              {hasGlobalMention && hasComplianceMention && hasPainPoint ? '9' : 
               (hasGlobalMention && hasComplianceMention) || (hasGlobalMention && hasPainPoint) ? '7' :
               hasGlobalMention ? '6' : '5'}/10
            </span>
          </div>
          <p>Great foundation! Keep practicing to perfect your delivery.</p>
        </div>
      </div>

      <div className="feedback-actions">
        <Button onClick={onShowExample} variant="secondary">
          See Example Pitch
        </Button>
        <Button onClick={onContinue} variant="primary">
          Continue
        </Button>
      </div>
    </div>
  )
}

export default AIFeedback
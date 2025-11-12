import React from 'react'

function ScoreDisplay({ score, totalScenarios, completedScenarios, onComplete }) {
  const percentage = Math.round((score / totalScenarios) * 100)
  
  const getScoreMessage = () => {
    if (percentage >= 100) return 'Perfect! You\'re ready to handle any objection!'
    if (percentage >= 67) return 'Great job! You understand the key principles.'
    if (percentage >= 33) return 'Good start! Review the feedback to improve.'
    return 'Keep practicing! Focus on value and integration messaging.'
  }

  const renderStars = () => {
    return Array.from({ length: totalScenarios }, (_, index) => (
      <span key={index} className={`star ${index < score ? 'filled' : 'empty'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <div className="score-display">
      <div className="score-header">
        <h2>Scenario Complete!</h2>
        <div className="score-stars">
          {renderStars()}
        </div>
        <div className="score-text">
          {score} out of {totalScenarios} correct ({percentage}%)
        </div>
      </div>
      
      <div className="score-message">
        <p>{getScoreMessage()}</p>
      </div>
      
      <div className="scenario-summary">
        <h3>Your Responses:</h3>
        {completedScenarios.map((completed, index) => (
          <div key={index} className={`summary-item ${completed.correct ? 'correct' : 'incorrect'}`}>
            <span className="summary-icon">{completed.correct ? '✅' : '❌'}</span>
            <span className="summary-text">Scenario {index + 1}: {completed.correct ? 'Correct' : 'Needs work'}</span>
          </div>
        ))}
      </div>
      
      <button 
        onClick={onComplete}
        className="btn btn-primary btn-large"
      >
        Next Challenge: Pitch It!
      </button>
    </div>
  )
}

export default ScoreDisplay
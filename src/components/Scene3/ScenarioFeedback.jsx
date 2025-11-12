import React from 'react'

function ScenarioFeedback({ scenario, selectedOption, onNext, isLastScenario }) {
  const isCorrect = selectedOption.correct
  
  return (
    <div className="scenario-feedback">
      <div className={`feedback-popup ${isCorrect ? 'correct' : 'incorrect'}`}>
        <div className="feedback-icon">
          {isCorrect ? '✅' : '❌'}
        </div>
        <div className="feedback-content">
          <h3>{isCorrect ? 'Excellent!' : 'Not quite...'}</h3>
          <p>{isCorrect ? scenario.feedback.correct : scenario.feedback.incorrect}</p>
        </div>
        <button 
          onClick={onNext}
          className="btn btn-primary btn-medium"
        >
          {isLastScenario ? 'See Results' : 'Next Scenario'}
        </button>
      </div>
    </div>
  )
}

export default ScenarioFeedback
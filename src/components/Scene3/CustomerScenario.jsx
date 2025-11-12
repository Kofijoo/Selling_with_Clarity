import React from 'react'

function CustomerScenario({ scenario, onOptionSelect, selectedOption, showFeedback }) {
  return (
    <div className="customer-scenario">
      <div className="scenario-title">{scenario.title}</div>
      
      <div className="chat-simulation">
        <div className="customer-message">
          <div className="customer-avatar">👤</div>
          <div className="message-bubble customer">
            {scenario.customerMessage}
          </div>
        </div>
        
        <div className="response-options">
          <div className="your-response-label">Choose your response:</div>
          {scenario.options.map(option => (
            <button
              key={option.id}
              className={`response-option ${selectedOption?.id === option.id ? 'selected' : ''} ${
                showFeedback && option.correct ? 'correct' : ''
              } ${showFeedback && selectedOption?.id === option.id && !option.correct ? 'incorrect' : ''}`}
              onClick={() => !showFeedback && onOptionSelect(option)}
              disabled={showFeedback}
            >
              <span className="option-letter">{option.id})</span>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerScenario
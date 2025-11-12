import React, { useState } from 'react'

const discoveryCategories = [
  {
    id: 'current-state',
    title: 'Current State',
    questions: [
      'How many employees do you currently have globally?',
      'Which countries are you operating in today?',
      'What payroll and HR systems are you using now?',
      'What challenges are you facing with your current setup?'
    ]
  },
  {
    id: 'pain-points',
    title: 'Pain Points',
    questions: [
      'What compliance issues keep you up at night?',
      'How much time does your team spend on manual processes?',
      'What happens when you need to hire in a new country?',
      'How do you handle currency fluctuations and local regulations?'
    ]
  },
  {
    id: 'growth-plans',
    title: 'Growth Plans',
    questions: [
      'Which markets are you planning to expand into?',
      'What\'s your timeline for international growth?',
      'How many new hires are you planning globally?',
      'What\'s driving your expansion strategy?'
    ]
  },
  {
    id: 'decision-process',
    title: 'Decision Process',
    questions: [
      'Who else is involved in this decision?',
      'What\'s your evaluation timeline?',
      'What criteria are most important for your selection?',
      'What would need to happen for you to move forward?'
    ]
  }
]

function DiscoveryGuide({ onComplete, onBack }) {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div className="discovery-guide">
      <div className="discovery-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <h3>Discovery Question Guide</h3>
        <p>Essential questions for effective client conversations</p>
      </div>

      <div className="categories-grid">
        {discoveryCategories.map(category => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => setActiveCategory(category)}
          >
            <h4>{category.title}</h4>
            <p>{category.questions.length} questions</p>
            <div className="card-arrow">→</div>
          </div>
        ))}
      </div>

      <div className="discovery-actions">
        <button onClick={onComplete} className="btn btn-primary btn-medium">
          Continue
        </button>
      </div>

      {activeCategory && (
        <div className="category-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4>{activeCategory.title}</h4>
              <button 
                onClick={() => setActiveCategory(null)}
                className="close-button"
              >
                ×
              </button>
            </div>
            
            <div className="questions-list">
              {activeCategory.questions.map((question, index) => (
                <div key={index} className="question-item">
                  <span className="question-number">{index + 1}.</span>
                  <span className="question-text">{question}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DiscoveryGuide
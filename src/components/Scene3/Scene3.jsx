import React, { useState } from 'react'
import CustomerScenario from './CustomerScenario'
import ScenarioFeedback from './ScenarioFeedback'
import ScoreDisplay from './ScoreDisplay'

const scenarios = [
  {
    id: 1,
    title: 'Customer Objection - Local Payroll Provider',
    customerMessage: 'We already use a local payroll provider. Why should we change?',
    options: [
      { id: 'A', text: 'Josh Agyekum can replace your provider entirely.', correct: false },
      { id: 'B', text: 'That\'s great! Josh Agyekum integrates with your provider while helping you expand globally.', correct: true },
      { id: 'C', text: 'We\'re cheaper than your current solution.', correct: false }
    ],
    feedback: {
      correct: 'Exactly! You emphasized partnership and scalability - key Josh Agyekum differentiators.',
      incorrect: 'Not quite - focus on integration and global reach rather than replacement.'
    }
  },
  {
    id: 2,
    title: 'Customer Objection - Pricing',
    customerMessage: 'Your pricing seems higher than our current solution.',
    options: [
      { id: 'A', text: 'You get what you pay for - we\'re premium quality.', correct: false },
      { id: 'B', text: 'Let me show you the ROI calculation including compliance savings and global expansion costs.', correct: true },
      { id: 'C', text: 'I can offer you a discount to match their price.', correct: false }
    ],
    feedback: {
      correct: 'Perfect! You focused on value and ROI rather than just price comparison.',
      incorrect: 'Focus on demonstrating value and ROI rather than competing on price alone.'
    }
  },
  {
    id: 3,
    title: 'Customer Objection - Feature Question',
    customerMessage: 'Does Josh Agyekum handle benefits administration in our country?',
    options: [
      { id: 'A', text: 'Yes, we handle benefits in 100+ countries with local expertise.', correct: true },
      { id: 'B', text: 'I\'ll need to check with our team and get back to you.', correct: false },
      { id: 'C', text: 'We can set that up for you after implementation.', correct: false }
    ],
    feedback: {
      correct: 'Excellent! You demonstrated confidence and specific capability knowledge.',
      incorrect: 'Show confidence in your product knowledge - highlight our global benefits coverage.'
    }
  }
]

function Scene3({ onSceneComplete }) {
  const [currentScenario, setCurrentScenario] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [completedScenarios, setCompletedScenarios] = useState([])

  const handleOptionSelect = (option) => {
    setSelectedOption(option)
    setShowFeedback(true)
    
    if (option.correct) {
      setScore(score + 1)
    }
    
    setCompletedScenarios([...completedScenarios, {
      scenario: currentScenario,
      correct: option.correct,
      selectedText: option.text
    }])
  }

  const handleNextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1)
      setSelectedOption(null)
      setShowFeedback(false)
    } else {
      setShowFeedback(false)
    }
  }

  const allScenariosComplete = completedScenarios.length === scenarios.length

  return (
    <div className="scene3">
      <div className="scenario-header">
        <h2>Your Turn: Objection Handling</h2>
        <div className="scenario-progress">
          Scenario {currentScenario + 1} of {scenarios.length}
        </div>
      </div>

      {!allScenariosComplete ? (
        <>
          <CustomerScenario 
            scenario={scenarios[currentScenario]}
            onOptionSelect={handleOptionSelect}
            selectedOption={selectedOption}
            showFeedback={showFeedback}
          />
          
          {showFeedback && (
            <ScenarioFeedback 
              scenario={scenarios[currentScenario]}
              selectedOption={selectedOption}
              onNext={handleNextScenario}
              isLastScenario={currentScenario === scenarios.length - 1}
            />
          )}
        </>
      ) : (
        <ScoreDisplay 
          score={score}
          totalScenarios={scenarios.length}
          completedScenarios={completedScenarios}
          onComplete={onSceneComplete}
        />
      )}
    </div>
  )
}

export default Scene3
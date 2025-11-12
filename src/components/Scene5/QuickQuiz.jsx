import React, { useState } from 'react'

const quizQuestions = [
  {
    id: 1,
    question: "What's Josh Agyekum's unique advantage in payroll delivery?",
    options: [
      { id: 'A', text: 'Third-party processors', correct: false },
      { id: 'B', text: 'Fully owned infrastructure', correct: true },
      { id: 'C', text: 'Lowest pricing in market', correct: false }
    ]
  },
  {
    id: 2,
    question: "Which compliance feature sets Josh Agyekum apart?",
    options: [
      { id: 'A', text: 'Manual compliance checks', correct: false },
      { id: 'B', text: 'Automated legal updates across 100+ countries', correct: true },
      { id: 'C', text: 'Basic tax calculations', correct: false }
    ]
  },
  {
    id: 3,
    question: "What's the best response to pricing objections?",
    options: [
      { id: 'A', text: 'Offer immediate discounts', correct: false },
      { id: 'B', text: 'Focus on ROI and compliance savings', correct: true },
      { id: 'C', text: 'Compare only on price', correct: false }
    ]
  },
  {
    id: 4,
    question: "How should you handle integration concerns?",
    options: [
      { id: 'A', text: 'Emphasize partnership and seamless integration', correct: true },
      { id: 'B', text: 'Suggest complete replacement', correct: false },
      { id: 'C', text: 'Minimize integration complexity', correct: false }
    ]
  }
]

function QuickQuiz({ onComplete, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswerSelect = (questionId, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionId
    })
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let correct = 0
    quizQuestions.forEach(q => {
      const selectedOption = q.options.find(opt => opt.id === selectedAnswers[q.id])
      if (selectedOption && selectedOption.correct) {
        correct++
      }
    })
    return correct
  }

  const score = calculateScore()
  const percentage = Math.round((score / quizQuestions.length) * 100)

  if (showResults) {
    return (
      <div className="quiz-results">
        <div className="results-header">
          <h3>Quiz Complete!</h3>
          <div className="score-display">
            <div className="score-number">{score}/{quizQuestions.length}</div>
            <div className="score-percentage">{percentage}%</div>
          </div>
        </div>
        
        <div className="score-message">
          <p>
            {percentage >= 75 ? 'Excellent! You\'re ready to sell with confidence!' :
             percentage >= 50 ? 'Good job! Review the key concepts to improve.' :
             'Keep practicing! Focus on value propositions and objection handling.'}
          </p>
        </div>

        <div className="quiz-actions">
          <button onClick={() => {
            setCurrentQuestion(0)
            setSelectedAnswers({})
            setShowResults(false)
          }} className="btn btn-secondary btn-medium">
            Retry Quiz
          </button>
          <button onClick={onComplete} className="btn btn-primary btn-medium">
            Continue
          </button>
        </div>
      </div>
    )
  }

  const question = quizQuestions[currentQuestion]
  const selectedAnswer = selectedAnswers[question.id]

  return (
    <div className="quick-quiz">
      <div className="quiz-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <div className="quiz-progress">
          Question {currentQuestion + 1} of {quizQuestions.length}
        </div>
      </div>

      <div className="quiz-content">
        <div className="question-card">
          <h3>{question.question}</h3>
          <div className="quiz-options">
            {question.options.map(option => (
              <button
                key={option.id}
                className={`quiz-option ${selectedAnswer === option.id ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(question.id, option.id)}
              >
                <span className="option-letter">{option.id})</span>
                <span className="option-text">{option.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-navigation">
          <button 
            onClick={handleNext}
            disabled={!selectedAnswer}
            className="btn btn-primary btn-medium"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuickQuiz
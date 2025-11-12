import React, { useState } from 'react'

const objections = [
  {
    id: 'pricing',
    title: 'Pricing Concerns',
    objection: '"Your solution seems expensive compared to our current provider."',
    response: 'Focus on ROI: "Let me show you the compliance savings and global expansion costs you\'ll avoid. Most clients see 30% cost reduction within 6 months when factoring in hidden fees and risk mitigation."',
    tips: ['Emphasize total cost of ownership', 'Highlight compliance risk costs', 'Show expansion savings']
  },
  {
    id: 'integration',
    title: 'Integration Complexity',
    objection: '"We already have systems in place. This seems complicated."',
    response: 'Emphasize partnership: "That\'s great! Josh Agyekum integrates seamlessly with your existing systems while adding global capabilities. We work alongside your current setup, not against it."',
    tips: ['Stress partnership approach', 'Mention API integrations', 'Offer implementation support']
  },
  {
    id: 'features',
    title: 'Feature Questions',
    objection: '"Does this handle [specific requirement] in our country?"',
    response: 'Show expertise: "Yes, we handle [requirement] in 100+ countries with local expertise. Our compliance team ensures everything meets local regulations automatically."',
    tips: ['Demonstrate global knowledge', 'Mention local expertise', 'Highlight automation']
  },
  {
    id: 'timing',
    title: 'Timing Objections',
    objection: '"We\'re not ready to make changes right now."',
    response: 'Create urgency: "I understand. However, compliance requirements are changing rapidly. Starting the conversation now ensures you\'re prepared when you need to expand or face new regulations."',
    tips: ['Highlight changing regulations', 'Emphasize preparation', 'Offer pilot programs']
  }
]

function CheatSheet({ onComplete, onBack }) {
  const [selectedObjection, setSelectedObjection] = useState(null)

  return (
    <div className="cheat-sheet">
      <div className="cheat-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <h3>Objection Cheat Sheet</h3>
      </div>

      <div className="objections-grid">
        {objections.map(objection => (
          <div
            key={objection.id}
            className="objection-card"
            onClick={() => setSelectedObjection(objection)}
          >
            <h4>{objection.title}</h4>
            <p className="objection-preview">"{objection.objection.substring(0, 50)}..."</p>
            <div className="card-arrow">→</div>
          </div>
        ))}
      </div>

      <div className="cheat-actions">
        <button onClick={onComplete} className="btn btn-primary btn-medium">
          Continue
        </button>
      </div>

      {selectedObjection && (
        <div className="objection-modal">
          <div className="modal-content">
            <div className="modal-header">
              <h4>{selectedObjection.title}</h4>
              <button 
                onClick={() => setSelectedObjection(null)}
                className="close-button"
              >
                ×
              </button>
            </div>
            
            <div className="objection-details">
              <div className="objection-section">
                <h5>Common Objection:</h5>
                <p className="objection-text">{selectedObjection.objection}</p>
              </div>
              
              <div className="response-section">
                <h5>Recommended Response:</h5>
                <p className="response-text">{selectedObjection.response}</p>
              </div>
              
              <div className="tips-section">
                <h5>Key Tips:</h5>
                <ul>
                  {selectedObjection.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheatSheet
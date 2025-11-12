import React from 'react'
import Button from '../shared/Button'

function FinalActions({ onComplete }) {
  const handleDownloadPlaybook = () => {
    // Mock download action
    const link = document.createElement('a')
    link.href = 'data:text/plain;charset=utf-8,Josh Agyekum Sales Playbook - Coming Soon!'
    link.download = 'josh-agyekum-sales-playbook.txt'
    link.click()
  }

  return (
    <div className="final-actions">
      <div className="actions-grid">
        <Button 
          onClick={handleDownloadPlaybook}
          variant="primary"
          size="large"
          className="download-btn"
        >
          Download Playbook
        </Button>
        
        <Button 
          onClick={onComplete}
          variant="secondary"
          size="large"
          className="dashboard-btn"
        >
          Return to Dashboard
        </Button>
      </div>
      
      <div className="completion-message">
        <p>Congratulations! You've completed the Josh Agyekum Selling with Clarity training.</p>
      </div>
    </div>
  )
}

export default FinalActions
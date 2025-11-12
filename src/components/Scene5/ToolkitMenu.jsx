import React from 'react'

const modules = [
  {
    id: 'quiz',
    title: 'Quick Quiz',
    description: 'Test your knowledge with 4 questions',
    icon: '🧠',
    color: '#3b82f6'
  },
  {
    id: 'cheatsheet',
    title: 'Objection Cheat Sheet',
    description: 'Quick reference for common objections',
    icon: '📋',
    color: '#10b981'
  },
  {
    id: 'discovery',
    title: 'Discovery Question Guide',
    description: 'Essential questions for client meetings',
    icon: '❓',
    color: '#f59e0b'
  },
  {
    id: 'updates',
    title: 'Product Launch Updates',
    description: 'Latest features and improvements',
    icon: '🚀',
    color: '#8b5cf6'
  }
]

function ToolkitMenu({ onModuleSelect, completedModules, canFinish, onFinish }) {
  return (
    <div className="toolkit-menu">
      <div className="modules-grid">
        {modules.map(module => (
          <div
            key={module.id}
            className={`module-card ${completedModules.includes(module.id) ? 'completed' : ''}`}
            onClick={() => onModuleSelect(module.id)}
          >
            <div className="module-icon" style={{ color: module.color }}>
              {module.icon}
            </div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            {completedModules.includes(module.id) && (
              <div className="completion-badge">✅</div>
            )}
          </div>
        ))}
      </div>

      {canFinish && (
        <div className="finish-section">
          <button 
            onClick={onFinish}
            className="btn btn-primary btn-large"
          >
            Complete Training
          </button>
        </div>
      )}
    </div>
  )
}

export default ToolkitMenu
import React, { useState } from 'react'
import ToolkitMenu from './ToolkitMenu'
import QuickQuiz from './QuickQuiz'
import CheatSheet from './CheatSheet'
import DiscoveryGuide from './DiscoveryGuide'
import ProductUpdates from './ProductUpdates'

function Scene5({ onSceneComplete }) {
  const [activeModule, setActiveModule] = useState(null)
  const [completedModules, setCompletedModules] = useState([])

  const handleModuleComplete = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId])
    }
    setActiveModule(null)
  }

  const handleBackToMenu = () => {
    setActiveModule(null)
  }

  const canFinish = completedModules.length > 0

  return (
    <div className="scene5">
      <div className="toolkit-header">
        <h2>Keep Getting Better</h2>
        <p>Choose your learning tools to reinforce key skills</p>
      </div>

      {!activeModule ? (
        <ToolkitMenu 
          onModuleSelect={setActiveModule}
          completedModules={completedModules}
          canFinish={canFinish}
          onFinish={onSceneComplete}
        />
      ) : (
        <>
          {activeModule === 'quiz' && (
            <QuickQuiz 
              onComplete={() => handleModuleComplete('quiz')}
              onBack={handleBackToMenu}
            />
          )}
          {activeModule === 'cheatsheet' && (
            <CheatSheet 
              onComplete={() => handleModuleComplete('cheatsheet')}
              onBack={handleBackToMenu}
            />
          )}
          {activeModule === 'discovery' && (
            <DiscoveryGuide 
              onComplete={() => handleModuleComplete('discovery')}
              onBack={handleBackToMenu}
            />
          )}
          {activeModule === 'updates' && (
            <ProductUpdates 
              onComplete={() => handleModuleComplete('updates')}
              onBack={handleBackToMenu}
            />
          )}
        </>
      )}
    </div>
  )
}

export default Scene5
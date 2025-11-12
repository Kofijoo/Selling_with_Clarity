import React from 'react'

function SceneNavigation({ currentScene, onSceneChange }) {
  return (
    <div className="scene-navigation">
      <select 
        value={currentScene} 
        onChange={(e) => onSceneChange(Number(e.target.value))}
        className="scene-select"
      >
        <option value={1}>Scene 1: Global Challenge</option>
        <option value={2}>Scene 2: Product Overview</option>
        <option value={3}>Scene 3: Objection Handling</option>
        <option value={4}>Scene 4: Pitch Practice</option>
        <option value={5}>Scene 5: Learning Toolkit</option>
        <option value={6}>Scene 6: Performance Analytics</option>
      </select>
    </div>
  )
}

export default SceneNavigation
import React from 'react'

function SceneTransition({ isVisible, children }) {
  return (
    <div className={`scene-transition ${isVisible ? 'visible' : 'hidden'}`}>
      {children}
    </div>
  )
}

export default SceneTransition
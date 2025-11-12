import React from 'react'
import Scene1 from './components/Scene1/Scene1'
import Scene2 from './components/Scene2/Scene2'
import Scene3 from './components/Scene3/Scene3'
import Scene4 from './components/Scene4/Scene4'
import Scene5 from './components/Scene5/Scene5'
import Scene6 from './components/Scene6/Scene6'
import SceneTransition from './components/shared/SceneTransition'
import Button from './components/shared/Button'
import { useSceneProgress } from './hooks/useSceneProgress'
import './styles/scene5.css'

function App() {
  const { currentScene, completeScene, resetProgress } = useSceneProgress()

  const renderScene = () => {
    switch(currentScene) {
      case 1:
        return (
          <SceneTransition isVisible={true}>
            <Scene1 onSceneComplete={() => completeScene(1)} />
          </SceneTransition>
        )
      case 2:
        return (
          <SceneTransition isVisible={true}>
            <Scene2 onSceneComplete={() => completeScene(2)} />
          </SceneTransition>
        )
      case 3:
        return (
          <SceneTransition isVisible={true}>
            <Scene3 onSceneComplete={() => completeScene(3)} />
          </SceneTransition>
        )
      case 4:
        return (
          <SceneTransition isVisible={true}>
            <Scene4 onSceneComplete={() => completeScene(4)} />
          </SceneTransition>
        )
      case 5:
        return (
          <SceneTransition isVisible={true}>
            <Scene5 onSceneComplete={() => completeScene(5)} />
          </SceneTransition>
        )
      case 6:
        return (
          <SceneTransition isVisible={true}>
            <Scene6 onSceneComplete={() => completeScene(6)} />
          </SceneTransition>
        )
      case 7:
        return (
          <SceneTransition isVisible={true}>
            <div className="completion-screen">
              <h1>Congratulations!</h1>
              <p>You've completed the Josh Agyekum Selling with Clarity training</p>
              <Button onClick={resetProgress} variant="primary" size="large">
                Start Over
              </Button>
            </div>
          </SceneTransition>
        )
      default:
        return null
    }
  }

  return (
    <div className="container">
      {renderScene()}
    </div>
  )
}

export default App
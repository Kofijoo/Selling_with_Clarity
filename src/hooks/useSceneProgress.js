import { useState, useEffect } from 'react'

export function useSceneProgress() {
  const [currentScene, setCurrentScene] = useState(1)
  const [sceneData, setSceneData] = useState({
    scene1: { completed: false, exploredRegions: [] },
    scene2: { completed: false, exploredFeatures: [] }
  })

  const updateSceneData = (scene, data) => {
    setSceneData(prev => ({
      ...prev,
      [scene]: { ...prev[scene], ...data }
    }))
  }

  const completeScene = (sceneNumber) => {
    updateSceneData(`scene${sceneNumber}`, { completed: true })
    setCurrentScene(sceneNumber + 1)
  }

  const resetProgress = () => {
    setCurrentScene(1)
    setSceneData({
      scene1: { completed: false, exploredRegions: [] },
      scene2: { completed: false, exploredFeatures: [] }
    })
  }

  return {
    currentScene,
    sceneData,
    updateSceneData,
    completeScene,
    resetProgress,
    setCurrentScene
  }
}
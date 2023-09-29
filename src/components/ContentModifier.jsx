import GenerateAutomaticInput from '../services/GenerateAutomaticInput.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function ContentModifier() {
  const [sceneContent, selectedContent, resetSelectedContent] = useSceneStore(
    (state) => [
      state.sceneContent,
      state.selectedContent,
      state.resetSelectedContent,
    ],
    shallow,
  )

  if (!sceneContent || !selectedContent) return <></>

  const selectedPiece = sceneContent.find(
    (element) => element.uuid === selectedContent,
  )

  if (!selectedPiece) {
    resetSelectedContent()
    return <></>
  }

  return (
    <div className='pt-2'>
      {Object.entries(selectedPiece.args).map(([key, value]) => (
        <GenerateAutomaticInput
          key={key}
          label={key}
          value={value}
          scenePiece={selectedPiece}
        />
      ))}
    </div>
  )
}

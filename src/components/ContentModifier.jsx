import GenerateAutomaticInput from '../services/GenerateAutomaticInput.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'

export default function ContentModifier() {
  const [sceneMeshes, focusedMeshUUID, resetFocusedMesh] = useSceneStore(
    (state) => [
      state.sceneMeshes,
      state.focusedMeshUUID,
      state.resetFocusedMesh,
    ],
    shallow,
  )

  if (!sceneMeshes || !focusedMeshUUID) return <></>

  const selectedPiece = sceneMeshes.find(
    (mesh) => mesh.uuid === focusedMeshUUID,
  )

  if (!selectedPiece) {
    resetFocusedMesh()
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

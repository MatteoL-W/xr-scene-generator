import GenerateAutomaticInput from '../services/GenerateAutomaticInput.jsx'
import useSceneStore from '../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import ModifiersTitle from './ModifiersTitle.jsx'
import { BsFillBoxFill } from 'react-icons/bs'

export default function MeshModifier() {
  const [sceneMeshes, focusedMeshUUID, resetFocusedMesh] = useSceneStore(
    (state) => [
      state.sceneMeshes,
      state.focusedMeshUUID,
      state.resetFocusedMesh,
    ],
    shallow,
  )

  if (!sceneMeshes || !focusedMeshUUID) return <></>

  const focusedMesh = sceneMeshes.find((mesh) => mesh.uuid === focusedMeshUUID)

  if (!focusedMesh) {
    resetFocusedMesh()
    return
  }

  return (
    <div className='border-b border-b-white'>
      <ModifiersTitle
        title={`"${focusedMesh.name}" Modifier`}
        Icon={BsFillBoxFill}
      />
      {Object.entries(focusedMesh.args).map(([key, value]) => (
        <GenerateAutomaticInput key={key} label={key} value={value} />
      ))}
    </div>
  )
}

import useSceneStore from '../../../store/SceneStore.jsx'
import { shallow } from 'zustand/shallow'
import Title from '../Title.jsx'
import { BsFillBoxFill } from 'react-icons/bs'
import Geometry from './Geometry.jsx'

export default function MeshModifier() {
  const [sceneMeshes, focusedMeshUUID, resetFocusedMesh] = useSceneStore(
    (state) => [
      state.sceneMeshes,
      state.focusedMeshUUID,
      state.resetFocusedMesh,
    ],
    shallow,
  )

  if (!sceneMeshes || !focusedMeshUUID) return

  const focusedMesh = sceneMeshes.find((mesh) => mesh.uuid === focusedMeshUUID)
  if (!focusedMesh) {
    resetFocusedMesh()
    return
  }

  return (
    <div className='border-b border-b-white'>
      <Title title={`"${focusedMesh.name}" Modifier`} Icon={BsFillBoxFill} />

      <Geometry />
    </div>
  )
}

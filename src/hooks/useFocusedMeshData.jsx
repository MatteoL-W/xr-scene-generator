import useStore from '@/store/index.jsx'
import { shallow } from 'zustand/shallow'
import { Vector3 } from 'three'

// ToDo: Optimize ?
export function useFocusedMeshData() {
  const [sceneMeshes, focusedMeshUUID, resetFocusedMesh] = useStore(
    (state) => [
      state.sceneMeshes,
      state.focusedMeshUUID,
      state.resetFocusedMesh,
    ],
    shallow,
  )

  if (!sceneMeshes || !focusedMeshUUID) return

  const focusedMesh = sceneMeshes.find((mesh) => mesh.uuid === focusedMeshUUID)
  if (!focusedMesh) resetFocusedMesh()

  return focusedMesh
}

export function useFocusedMeshPosition() {
  const focusedMesh = useFocusedMeshData()
  return new Vector3(...focusedMesh.transformations.position)
}

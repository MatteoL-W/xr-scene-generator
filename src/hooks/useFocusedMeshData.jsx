import useStore from '@/store/index.jsx'
import { useShallow } from 'zustand/react/shallow'
import { Vector3 } from 'three'

// ToDo: Optimize ?
export function useFocusedMeshData() {
  const [sceneMeshes] = useStore(useShallow((state) => [state.sceneMeshes]))
  const [focusedMeshUUID, resetFocusedMesh] = useStore((state) => [
    state.focusedMeshUUID,
    state.resetFocusedMesh,
  ])

  if (!sceneMeshes || !focusedMeshUUID) return

  const focusedMesh = sceneMeshes.find((mesh) => mesh.uuid === focusedMeshUUID)
  if (!focusedMesh) resetFocusedMesh()

  return focusedMesh
}

export function useFocusedMeshPosition() {
  const focusedMesh = useFocusedMeshData()
  if (focusedMesh) return new Vector3(...focusedMesh.transformations.position)
}

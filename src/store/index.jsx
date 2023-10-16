import { createWithEqualityFn } from 'zustand/traditional'
import { manageSceneMeshes } from './createSceneMeshesSlice.jsx'
import { manageFocusedMesh } from './createFocusedMeshSlice.jsx'
import { manageControls } from './createTransformControlsSlice.jsx'
import { manageOverlay } from './createOverlaySlice.jsx'
import { manageDebugger } from './createDebugSlice.jsx'

const useStore = createWithEqualityFn((set) => ({
  ...manageSceneMeshes(set),
  ...manageFocusedMesh(set),
  ...manageControls(set),
  ...manageOverlay(set),
  ...manageDebugger(set),
}))

export default useStore

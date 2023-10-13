import { createWithEqualityFn } from 'zustand/traditional'
import { manageSceneMeshes } from './createSceneMeshesSlice.jsx'
import { manageFocusedMesh } from './createFocusedMeshSlice.jsx'
import { manageControls } from './createTransformControlsSlice.jsx'
import { manageOverlay } from './createOverlaySlice.jsx'

const useStore = createWithEqualityFn((set) => ({
  ...manageSceneMeshes(set),
  ...manageFocusedMesh(set),
  ...manageControls(set),
  ...manageOverlay(set),
}))

export default useStore

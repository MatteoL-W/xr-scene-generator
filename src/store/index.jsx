import { createWithEqualityFn } from 'zustand/traditional'
import { manageSceneMeshes } from './createSceneMeshesSlice.jsx'
import { manageFocusedMesh } from './createFocusedMeshSlice.jsx'
import { manageControls } from './createTransformControlsSlice.jsx'
import { manageOverlay } from './createOverlaySlice.jsx'
import { manageDebugger } from './createDebugSlice.jsx'
import { manageRendererMisc } from './createRendererMiscSlice.jsx'

const useStore = createWithEqualityFn((set) => ({
  ...manageSceneMeshes(set),
  ...manageFocusedMesh(set),
  ...manageControls(set),
  ...manageOverlay(set),
  ...manageDebugger(set),
  ...manageRendererMisc(set),
}))

export default useStore

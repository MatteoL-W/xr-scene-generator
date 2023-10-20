import { manageSceneMeshes } from './createSceneMeshesSlice.jsx'
import { manageFocusedMesh } from './createFocusedMeshSlice.jsx'
import { manageControls } from './createTransformControlsSlice.jsx'
import { manageOverlay } from './createOverlaySlice.jsx'
import { manageDebugger } from './createDebugSlice.jsx'
import { manageRendererMisc } from './createRendererMiscSlice.jsx'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (...a) => ({
      ...manageSceneMeshes(...a),
      ...manageFocusedMesh(...a),
      ...manageControls(...a),
      ...manageOverlay(...a),
      ...manageDebugger(...a),
      ...manageRendererMisc(...a),
    }),
    {
      name: 'store',
      partialize: (state) => ({
        sceneMeshes: state.sceneMeshes,
      }),
    },
  ),
)

export default useStore

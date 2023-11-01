import { manageHistory } from '@/store/createHistorySlice.jsx'
import { manageSceneMeshes } from './createMeshesSlice.jsx'
import { manageSceneLights } from '@/store/createLightsSlice.jsx'
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
      ...manageHistory(...a),
      ...manageSceneMeshes(...a),
      ...manageSceneLights(...a),
      ...manageFocusedMesh(...a),
      ...manageControls(...a),
      ...manageOverlay(...a),
      ...manageDebugger(...a),
      ...manageRendererMisc(...a),
    }),
    {
      name: 'scene',
      partialize: (state) => ({
        sceneMeshes: state.sceneMeshes,
      }),
    },
  ),
)

export default useStore

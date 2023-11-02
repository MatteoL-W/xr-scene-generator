import { manageHistory } from '@/store/createHistorySlice.jsx'
import { manageSceneObjects } from './createObjectsSlice.jsx'
import { manageSceneLights } from '@/store/createLightsSlice.jsx'
import { manageFocusedObject } from './createFocusedObjectSlice.jsx'
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
      ...manageSceneObjects(...a),
      ...manageSceneLights(...a),
      ...manageFocusedObject(...a),
      ...manageControls(...a),
      ...manageOverlay(...a),
      ...manageDebugger(...a),
      ...manageRendererMisc(...a),
    }),
    {
      name: 'scene',
      partialize: (state) => ({
        sceneObjects: state.sceneObjects,
      }),
    },
  ),
)

export default useStore

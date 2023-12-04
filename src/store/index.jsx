import { manageHistory } from './createHistorySlice.jsx'
import { manageSceneObjects } from './createObjectsSlice.jsx'
import { manageFocusedObject } from './createFocusedObjectSlice.jsx'
import { manageControls } from './createTransformControlsSlice.jsx'
import { manageOverlay } from './createOverlaySlice.jsx'
import { manageDebugger } from './createDebugSlice.jsx'
import { manageRendererMisc } from './createRendererMiscSlice.jsx'
import { manageImmersiveExperience } from '@/store/createImmersiveSlice.jsx'
import { manageExporter } from '@/store/createExporterSlice.jsx'
import { manageImporter } from './createImporterSlice.jsx'
import { manageSkybox } from '@/store/createSkyboxSlice.jsx'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (...a) => ({
      ...manageHistory(...a),
      ...manageSceneObjects(...a),
      ...manageFocusedObject(...a),
      ...manageControls(...a),
      ...manageOverlay(...a),
      ...manageDebugger(...a),
      ...manageRendererMisc(...a),
      ...manageImmersiveExperience(...a),
      ...manageExporter(...a),
      ...manageImporter(...a),
      ...manageSkybox(...a),
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

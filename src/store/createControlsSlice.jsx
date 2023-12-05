import { Vector3 } from 'three'

export const manageControls = (set) => ({
  transformControlsRef: null,
  setTransformControls: (transformControlsRef) => {
    set(() => ({ transformControlsRef }))
  },

  transformControlsMode: 'translate',
  setTransformControlsMode: (transformControlsMode) => {
    set(() => ({ transformControlsMode }))
  },

  cameraDirectionInstruction: new Vector3(0, 0, 0),
  setNewCameraDirectionInstruction: (vector3) => {
    set(() => ({ cameraDirectionInstruction: vector3 }))
  },

  isWaitingForCameraReset: false,
  startWaitingForCameraReset: () => {
    set(() => ({ isWaitingForCameraReset: true }))
  },
  stopWaitingForCameraReset: () => {
    set(() => ({ isWaitingForCameraReset: false }))
  },
})

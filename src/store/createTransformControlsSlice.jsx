export const manageControls = (set) => ({
  transformControlsRef: null,
  setTransformControls: (transformControlsRef) => {
    set(() => ({ transformControlsRef }))
  },

  transformControlsMode: 'translate',
  setTransformControlsMode: (transformControlsMode) => {
    set(() => ({ transformControlsMode }))
  },
})

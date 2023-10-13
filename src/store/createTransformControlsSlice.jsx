export const manageControls = (set) => ({
  transformControlsMode: 'translate',
  transformControlsRef: null,
  setTransformControls: (transformControlsRef) => {
    set(() => ({ transformControlsRef }))
  },
})

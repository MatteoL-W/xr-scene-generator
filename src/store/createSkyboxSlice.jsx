export const manageSkybox = (set) => ({
  skyboxPreset: 'park',
  setSkyboxPreset: (newPreset) => {
    set(() => ({ skyboxPreset: newPreset }))
  },

  skyboxFilesPreset: '',
  setSkyboxFilesPreset: (newFiles) => {
    set(() => ({ skyboxFilesPreset: newFiles }))
  },
})

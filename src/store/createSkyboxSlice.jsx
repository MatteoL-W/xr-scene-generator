export const manageSkybox = (set) => ({
  skyboxPreset: 'park',
  setSkyboxPreset: (newPreset) => {
    set(() => ({ skyboxPreset: newPreset }))
  },

  skyboxFilesPreset: '',
  setSkyboxFilesPreset: (newFiles) => {
    set(() => ({ skyboxFilesPreset: newFiles }))
  },

  appearsAtTheGround: true,
  setAppearsAtTheGround: (newState) => {
    set(() => ({ appearsAtTheGround: newState }))
  },
})

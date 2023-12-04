export const manageSkybox = (set) => ({
  skyboxPreset: 'park',
  setSkyboxPreset: (newPreset) => {
    set(() => ({ skyboxPreset: newPreset }))
  },
})

export const manageImmersiveExperience = (set) => ({
  immersiveExperienceMode: null,
  setImmersiveExperienceMode: (newMode) => {
    set(() => ({ immersiveExperienceMode: newMode, focusedObjectUUID: '' }))
  },
})

export const manageSceneLights = (set) => ({
  sceneLights: [],

  addLightToScene: (newLight) => {
    set((state) => ({
      sceneLights: [...state.sceneLights, { ...newLight }],
    }))
  },
  removeLightFromScene: (lightToRemove) => {
    set((state) => ({
      sceneLights: state.sceneLights.filter(
        (content) => content !== lightToRemove,
      ),
    }))
  },
  modifyLightUUID: (lightToUpdate, newUUID) => {
    set((state) => ({
      sceneLights: state.sceneLights.map((content) =>
        content === lightToUpdate ? { ...content, uuid: newUUID } : content,
      ),
    }))
  },
})

export const manageFocusedMesh = (set) => ({
  focusedMeshUUID: '',

  changeFocusedMeshUUID: (newContentUUID) => {
    set(() => ({
      focusedMeshUUID: newContentUUID,
    }))
  },
  resetFocusedMesh: () => {
    set(() => ({
      focusedMeshUUID: '',
    }))
  },
})

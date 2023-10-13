export const manageOverlay = (set) => ({
  isMeshListOpen: false,
  setMeshListState: (newState) => {
    set(() => ({ isMeshListOpen: newState }))
  },
})

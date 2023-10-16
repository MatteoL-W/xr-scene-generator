export const manageSceneMeshes = (set) => ({
  sceneMeshes: [],

  addMeshToScene: (newMesh) => {
    set((state) => ({
      sceneMeshes: [...state.sceneMeshes, { ...newMesh }],
    }))
  },
  removeMeshFromScene: (meshToRemove) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.filter(
        (content) => content !== meshToRemove,
      ),
    }))
  },
  modifyMeshUUID: (meshToUpdate, newUUID) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((content) =>
        content === meshToUpdate ? { ...content, uuid: newUUID } : content,
      ),
    }))
  },
})

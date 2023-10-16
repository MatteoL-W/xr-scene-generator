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
  modifyFocusedMeshArguments: (newArgs) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((mesh) =>
        mesh.uuid === state.focusedMeshUUID
          ? { ...mesh, args: { ...mesh.args, ...newArgs } }
          : mesh,
      ),
    }))
  },
  modifyFocusedMeshMaterial: (newArgs) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((mesh) =>
        mesh.uuid === state.focusedMeshUUID
          ? { ...mesh, material: { ...mesh.material, ...newArgs } }
          : mesh,
      ),
    }))
  },
})

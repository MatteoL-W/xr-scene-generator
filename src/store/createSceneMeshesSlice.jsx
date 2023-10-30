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
  removeFocusedMeshFromScene: () => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.filter(
        (content) => content.uuid !== state.focusedMeshUUID,
      ),
      focusedMeshUUID: '',
    }))
  },
  modifyMeshUUID: (meshToUpdate, newUUID) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((content) =>
        content === meshToUpdate ? { ...content, uuid: newUUID } : content,
      ),
    }))
  },
  modifyMeshArgs: (meshUUID, newArgs) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((mesh) =>
        mesh.uuid === meshUUID
          ? { ...mesh, args: { ...mesh.args, ...newArgs } }
          : mesh,
      ),
    }))
  },
  modifyMesh: (newArgs, uuid) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((mesh) =>
        mesh.uuid === uuid
          ? {
              ...mesh,
              ...newArgs,
            }
          : mesh,
      ),
    }))
  },
  modifyMeshName: (meshUUID, newName) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((mesh) =>
        mesh.uuid === meshUUID ? { ...mesh, userSetName: newName } : mesh,
      ),
    }))
  },
})

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
  modifyFocusedMeshTransformations: (newArgs) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((mesh) =>
        mesh.uuid === state.focusedMeshUUID
          ? {
              ...mesh,
              transformations: { ...mesh.transformations, ...newArgs },
            }
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

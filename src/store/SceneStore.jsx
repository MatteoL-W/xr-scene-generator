import { createWithEqualityFn } from 'zustand/traditional'

const initialState = {
  sceneMeshes: [],
  focusedMeshUUID: '',
  transformControlsRef: null,
}

const manageSceneMeshes = (set) => ({
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
  modifyMeshArguments: (meshUUIDToUpdate, newArgs) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((mesh) =>
        mesh.uuid === meshUUIDToUpdate
          ? { ...mesh, args: { ...mesh.args, ...newArgs } }
          : mesh,
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
})

const manageFocusedMesh = (set) => ({
  changeFocusedMesh: (newContentUUID) => {
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

const manageControls = (set) => ({
  setTransformControls: (transformControlsRef) => {
    set(() => ({ transformControlsRef }))
  },
})

const useSceneStore = createWithEqualityFn((set) => ({
  ...initialState,
  ...manageSceneMeshes(set),
  ...manageFocusedMesh(set),
  ...manageControls(set),
}))

export default useSceneStore

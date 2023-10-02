import { createWithEqualityFn } from 'zustand/traditional'

const initialState = {
  sceneMeshes: [],
  focusedMeshUUID: '',
  orbitControlsRef: null,
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
  modifyMeshUuid: (meshToUpdate, newUuid) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((content) =>
        content === meshToUpdate ? { ...content, uuid: newUuid } : content,
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
  setOrbitControls: (orbitControlsRef) => {
    set(() => ({ orbitControlsRef }))
  },
})

const useSceneStore = createWithEqualityFn((set) => ({
  ...initialState,
  ...manageSceneMeshes(set),
  ...manageFocusedMesh(set),
  ...manageControls(set),
}))

export default useSceneStore

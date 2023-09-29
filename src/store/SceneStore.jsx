import { createWithEqualityFn } from 'zustand/traditional'

const initialState = {
  sceneMeshes: [],
  focusedMeshUUID: '',
}

const manageSceneMeshes = (set) => ({
  addMeshToScene: (newContent) => {
    set((state) => ({
      sceneMeshes: [...state.sceneMeshes, { ...newContent }],
    }))
  },
  removeMeshFromScene: (contentToRemove) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.filter(
        (content) => content !== contentToRemove,
      ),
    }))
  },
  modifyMeshUuid: (contentToUpdate, newUuid) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((content) =>
        content === contentToUpdate ? { ...content, uuid: newUuid } : content,
      ),
    }))
  },
  modifyMeshArguments: (contentToUpdate, newArgs) => {
    set((state) => ({
      sceneMeshes: state.sceneMeshes.map((content) =>
        content === contentToUpdate
          ? { ...content, args: { ...content.args, ...newArgs } }
          : content,
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

const useSceneStore = createWithEqualityFn((set) => ({
  ...initialState,
  ...manageSceneMeshes(set),
  ...manageFocusedMesh(set),
}))

export default useSceneStore

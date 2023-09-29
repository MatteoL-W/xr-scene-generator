import { createWithEqualityFn } from 'zustand/traditional'

const initialState = {
  sceneContent: [],
  selectedContent: '',
}

const manageSceneContent = (set) => ({
  addContentToScene: (newContent) => {
    set((state) => ({
      sceneContent: [...state.sceneContent, { ...newContent }],
    }))
  },
  removeContentFromScene: (contentToRemove) => {
    set((state) => ({
      sceneContent: state.sceneContent.filter(
        (content) => content !== contentToRemove,
      ),
    }))
  },
  updateUuidContentOfPiece: (contentToUpdate, newUuid) => {
    set((state) => ({
      sceneContent: state.sceneContent.map((content) =>
        content === contentToUpdate ? { ...content, uuid: newUuid } : content,
      ),
    }))
  },
  updateArgsContentFromScene: (contentToUpdate, newArgs) => {
    set((state) => ({
      sceneContent: state.sceneContent.map((content) =>
        content === contentToUpdate
          ? { ...content, args: { ...content.args, ...newArgs } }
          : content,
      ),
    }))
  },
})

const manageSelectedContent = (set) => ({
  modifySelectedContent: (newContentUUID) => {
    set(() => ({
      selectedContent: newContentUUID,
    }))
  },
  resetSelectedContent: () => {
    set(() => ({
      selectedContent: '',
    }))
  },
})

const useSceneStore = createWithEqualityFn((set) => ({
  ...initialState,
  ...manageSceneContent(set),
  ...manageSelectedContent(set),
}))

export default useSceneStore

import { v4 as uuidv4 } from 'uuid'
import { createWithEqualityFn } from 'zustand/traditional'

const initialState = {
  sceneContent: [],
}

const sceneContentActions = (set) => ({
  addContentToScene: (newContent) => {
    const uuid = uuidv4()
    set((state) => ({
      sceneContent: [...state.sceneContent, { ...newContent, uuid }],
    }))
  },
  removeContentFromScene: (contentToRemove) => {
    set((state) => ({
      sceneContent: state.sceneContent.filter(
        (content) => content !== contentToRemove,
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

const useSceneStore = createWithEqualityFn((set) => ({
  ...initialState,
  ...sceneContentActions(set),
}))

export default useSceneStore

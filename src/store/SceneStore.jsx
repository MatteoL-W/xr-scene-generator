import { v4 as uuidv4 } from 'uuid'
import { createWithEqualityFn } from 'zustand/traditional'

const useSceneStore = createWithEqualityFn((set) => ({
  sceneContent: [],
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
}))

export default useSceneStore

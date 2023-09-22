import { createWithEqualityFn } from 'zustand/traditional'

const useSceneStore = createWithEqualityFn((set) => ({
  sceneContent: [],
  addContentToScene: (newContent) => {
    set((state) => ({ sceneContent: [...state.sceneContent, newContent] }))
  },
}))

export default useSceneStore

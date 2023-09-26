import { v4 as uuidv4 } from 'uuid'
import { createWithEqualityFn } from 'zustand/traditional'
import { Vector3 } from 'three'

const useSceneStore = createWithEqualityFn((set) => ({
  sceneContent: [],
  addContentToScene: (newContent) => {
    const uuid = uuidv4()
    const position = new Vector3(0, 0, 0)

    set((state) => ({
      sceneContent: [
        ...state.sceneContent,
        { ...newContent, uuid, args: { position } },
      ],
    }))
  },
  removeContentFromScene: (contentToRemove) => {
    set((state) => ({
      sceneContent: state.sceneContent.filter(
        (content) => content !== contentToRemove,
      ),
    }))
  },

  focusedScenePiece: null,
  toggleFocusedPiece: (piece) => {
    set((state) => ({
      focusedScenePiece: piece !== state.focusedScenePiece ? piece : null,
    }))
  },
}))

export default useSceneStore

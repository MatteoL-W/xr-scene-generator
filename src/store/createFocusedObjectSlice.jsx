export const manageFocusedObject = (set, get) => ({
  focusedObjectUUID: '',

  changeFocusedObjectUUID: (newContentUUID) => {
    set(() => ({
      focusedObjectUUID: newContentUUID,
    }))
  },
  resetFocusedObject: () => {
    set(() => ({
      focusedObjectUUID: '',
    }))
  },
  modifyFocusedObject: (newArgs, repository) => {
    const state = get()
    state.modifyObject(newArgs, state.focusedObjectUUID, repository)

    if (repository === 'transformations') {
      state.addNewActions(() => {
        state.modifyObject(newArgs, state.focusedObjectUUID, repository)
      })
    }
  },
  modifyFocusedObjectTransformations: (newArgs) => {
    set((state) => {
      state.addNewActions(() => {
        state.modifyObject(
          { transformations: newArgs },
          state.focusedObjectUUID,
        )
      })

      return {
        sceneObjects: state.sceneObjects.map((object) =>
          object.uuid === state.focusedObjectUUID
            ? {
                ...object,
                transformations: { ...object.transformations, ...newArgs },
              }
            : object,
        ),
      }
    })
  },
  modifyFocusedObjectMaterial: (newArgs) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((object) =>
        object.uuid === state.focusedObjectUUID
          ? { ...object, material: { ...object.material, ...newArgs } }
          : object,
      ),
    }))
  },
  modifyFocusedObjectArgs: (newArgs) => {
    set((state) => ({
      sceneObjects: state.sceneObjects.map((object) =>
        object.uuid === state.focusedObjectUUID
          ? { ...object, args: { ...object.args, ...newArgs } }
          : object,
      ),
    }))
  },
})

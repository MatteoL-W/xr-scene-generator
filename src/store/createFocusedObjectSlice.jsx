export const manageFocusedObject = (set) => ({
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

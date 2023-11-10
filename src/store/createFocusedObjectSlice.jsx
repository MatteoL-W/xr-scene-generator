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
      state.addNewActionsToHistoric(() => {
        state.modifyObject(newArgs, state.focusedObjectUUID, repository)
      })
    }
  },
  modifyFocusedObjectArgs: (newArgs) => {
    const state = get()
    state.modifyObject(newArgs, state.focusedObjectUUID, 'args')
  },
})

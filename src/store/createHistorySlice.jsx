export const manageHistory = (set) => ({
  actions: [],
  pointer: -1,

  addNewActions: (newActions) => {
    set((state) => {
      const actions = state.actions
      actions.splice(state.pointer + 1)
      actions[state.pointer + 1] = newActions

      return {
        actions: actions,
        pointer: state.pointer + 1,
      }
    })
  },
  undo: () => {
    set((state) => {
      const newPointer = state.pointer - 1
      if (newPointer >= 0) {
        state.actions[newPointer]()
        return { pointer: newPointer }
      }
      return state
    })
  },
  redo: () => {
    set((state) => {
      const newPointer = state.pointer + 1
      if (newPointer < state.actions.length) {
        state.actions[newPointer]()
        return { pointer: newPointer }
      }
      return state
    })
  },
})

export const manageHistory = (set, get) => ({
  actions: [],
  pointer: 0,

  hasSynchronousHistoric: () => {
    const state = get()
    return state.actions.length === state.pointer
  },
  saveActionInHistoric: (newActions) => {
    set((state) => {
      const actions = state.actions
      actions.splice(state.pointer)
      actions[state.pointer] = newActions

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

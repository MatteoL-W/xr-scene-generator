export const manageDebugger = (set) => ({
  isDebuggerUIOpen: false,
  setDebuggerUIState: (newState) => {
    set(() => ({ isDebuggerUIOpen: newState }))
  },
})

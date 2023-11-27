export const manageDebugger = (set) => ({
  isDebuggerUIOpen: true,
  setDebuggerUIState: (newState) => {
    set(() => ({ isDebuggerUIOpen: newState }))
  },
})

export const manageDebugger = (set) => ({
  isDebuggerUIOpen: false,
  setDebuggerUIState: (newState) => {
    set(() => ({ isDebuggerUIOpen: newState }))
  },

  isWaitingForDebugReport: false,
  startWaitingForDebugReport: () => {
    set(() => ({ isWaitingForDebugReport: true }))
  },
  stopWaitingForDebugReport: () => {
    set(() => ({ isWaitingForDebugReport: false }))
  },
})

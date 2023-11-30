export const manageDebugger = (set) => ({
  isDebuggerUIOpen: true,
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

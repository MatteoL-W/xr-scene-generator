export const manageExporter = (set) => ({
  isWaitingToDownloadGLTF: false,
  setIsWaitingToDownloadGLTF: () => {
    set(() => ({ isWaitingToDownloadGLTF: true }))
  },
  stopWaitingToDownloadGLTF: () => {
    set(() => ({ isWaitingToDownloadGLTF: false }))
  },
})

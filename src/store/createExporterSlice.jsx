export const manageExporter = (set) => ({
  isWaitingToDownloadGLTF: false,
  startWaitingToDownloadGLTF: () => {
    set(() => ({ isWaitingToDownloadGLTF: true }))
  },
  stopWaitingToDownloadGLTF: () => {
    set(() => ({ isWaitingToDownloadGLTF: false }))
  },
})

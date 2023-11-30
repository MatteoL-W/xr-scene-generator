export const manageImporter = (set) => ({
  importedMeshUrl: null,
  setImportedMeshUrl: (newURL) => {
    set(() => ({ importedMeshUrl: newURL }))
  },
  resetImportedMeshUrl: () => {
    set(() => ({ importedMeshUrl: null }))
  },
})

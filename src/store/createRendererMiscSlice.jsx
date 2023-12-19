export const manageRendererMisc = (set) => ({
  isGridOpen: false,
  setGridState: (isGridOpen) => {
    set(() => ({ isGridOpen }))
  },

  isAxesHelperOpen: true,
  setAxisHelperState: (isAxesHelperOpen) => {
    set(() => ({ isAxesHelperOpen }))
  },

  isHumanSilhouetteAppearing: true,
  setHumanSilhouetteState: (isHumanSilhouetteAppearing) => {
    set(() => ({ isHumanSilhouetteAppearing }))
  },
})

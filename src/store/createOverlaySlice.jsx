export const manageOverlay = (set) => ({
  isMenuOpen: false,
  setMenuState: (newState) => {
    set(() => ({ isMenuOpen: newState }))
  },
})

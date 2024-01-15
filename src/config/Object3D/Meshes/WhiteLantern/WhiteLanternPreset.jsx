import { Folders } from '../Folders.js'

export const WhiteLanternPreset = {
  name: 'White Lantern',
  internalName: 'WhiteLantern',
  type: 'mesh',
  folder: Folders.DECORATIONS,
  transformations: {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
  },
  args: {
    visible: true,
    receiveShadow: false,
    castShadow: false,
    hasPhysics: false,
    hasInteractivity: false,
    isFloating: false,
  },
}

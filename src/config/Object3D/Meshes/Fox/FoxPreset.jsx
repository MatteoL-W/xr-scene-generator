import { Folders } from '../Folders.js'

export const FoxPreset = {
  name: 'Fox',
  internalName: 'Fox',
  type: 'mesh',
  folder: Folders.ANIMALS,
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

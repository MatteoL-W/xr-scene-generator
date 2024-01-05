import { Folders } from '../Folders.js'

export const RockPreset = {
  name: 'Rock',
  internalName: 'Rock',
  type: 'mesh',
  folder: Folders.VEGETATION,
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

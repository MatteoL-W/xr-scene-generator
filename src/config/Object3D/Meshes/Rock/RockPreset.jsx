import { Folders } from '../Folders.js'

export const RockPreset = {
  name: 'Rock',
  userSetName: 'Rock',
  type: 'mesh',
  folder: Folders.VEGETATION,
  component: 'Rock',
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

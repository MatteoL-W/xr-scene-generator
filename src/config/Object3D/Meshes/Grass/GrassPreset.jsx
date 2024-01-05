import { Folders } from '../Folders.js'

export const GrassPreset = {
  name: 'Grass',
  userSetName: 'Grass',
  type: 'mesh',
  folder: Folders.VEGETATION,
  component: 'Grass',
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

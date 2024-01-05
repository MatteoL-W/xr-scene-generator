import { Folders } from '../Folders.js'

export const HighGrassPreset = {
  name: 'High Grass',
  userSetName: 'High Grass',
  type: 'mesh',
  folder: Folders.VEGETATION,
  component: 'HighGrass',
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

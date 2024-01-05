import { Folders } from '../Folders.js'

export const RedFlowersPreset = {
  name: 'Red Flowers',
  userSetName: 'Red Flowers',
  type: 'mesh',
  folder: Folders.VEGETATION,
  component: 'RedFlowers',
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

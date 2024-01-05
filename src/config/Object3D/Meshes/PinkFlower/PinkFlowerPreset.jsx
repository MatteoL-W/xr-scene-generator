import { Folders } from '../Folders.js'

export const PinkFlowerPreset = {
  name: 'Pink Flower',
  userSetName: 'Pink Flower',
  type: 'mesh',
  folder: Folders.VEGETATION,
  component: 'PinkFlower',
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

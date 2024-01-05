import { Folders } from '../Folders.js'

export const SquareTreePreset = {
  name: 'Square Tree',
  userSetName: 'Square Tree',
  type: 'mesh',
  folder: Folders.TREES,
  component: 'SquareTree',
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

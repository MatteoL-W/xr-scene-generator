import { Folders } from '../Folders.js'

export const TreeTrunkPreset = {
  name: 'Tree Trunk',
  userSetName: 'Tree Trunk',
  type: 'mesh',
  folder: Folders.TREES,
  component: 'TreeTrunk',
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

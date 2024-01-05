import { Folders } from '../Folders.js'

// ToDo : 'name' => internalName ; -'component' ; 'userSetName' => 'name'

export const LargeTreePreset = {
  name: 'Large Tree',
  userSetName: 'Large Tree',
  type: 'mesh',
  folder: Folders.TREES,
  component: 'LargeTree',
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

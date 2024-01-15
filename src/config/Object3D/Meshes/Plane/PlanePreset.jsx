import { Folders } from '../Folders.js'

export const PlanePreset = {
  name: 'Plane',
  internalName: 'Plane',
  type: 'mesh',
  folder: Folders.UTILS,
  transformations: {
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
    scale: [100, 100, 100],
  },
  material: {
    'material-color': '#000000',
  },
  args: {
    visible: true,
    receiveShadow: true,
    castShadow: false,
    hasPhysics: false,
    hasInteractivity: false,
    isFloating: false,
  },
}

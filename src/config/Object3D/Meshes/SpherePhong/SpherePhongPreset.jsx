import { Folders } from '../Folders.js'

export const SpherePhongPreset = {
  name: 'Sphere',
  internalName: 'SpherePhong',
  type: 'mesh',
  folder: Folders.UTILS,
  transformations: {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
  },
  material: {
    'material-color': '#000000',
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

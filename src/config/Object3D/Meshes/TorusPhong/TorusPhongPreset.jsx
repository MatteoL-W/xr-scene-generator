import { Folders } from '../Folders.js'

export const TorusPhongPreset = {
  name: 'Torus',
  internalName: 'TorusPhong',
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

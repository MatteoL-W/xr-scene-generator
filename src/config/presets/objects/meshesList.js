import Box from './meshes/Box.js'
import BigTori from './meshes/BigTori.js'

const meshesList = [
  Box,
  BigTori,
  {
    name: 'Sphere',
    userSetName: 'Sphere',
    type: 'mesh',
    component: 'Sphere',
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
  },
]

export default meshesList

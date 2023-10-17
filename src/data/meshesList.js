import { Box, Sphere } from '@react-three/drei'

const meshesList = [
  {
    name: 'Box',
    userSetName: 'Box',
    component: Box,
    transformations: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1.5],
    },
    material: {
      'material-color': '#000000',
    },
    args: {
      visible: true,
    },
  },
  {
    name: 'Sphere',
    userSetName: 'Sphere',
    component: Sphere,
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
    },
  },
]

export default meshesList

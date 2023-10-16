import { Box, Sphere } from '@react-three/drei'

const meshesList = [
  {
    name: 'Box',
    component: Box,
    transformations: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1.5],
    },
    material: {
      'material-color': '#000000',
    },
  },
  {
    name: 'Sphere',
    component: Sphere,
    transformations: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    material: {
      'material-color': '#000000',
    },
  },
]

export default meshesList

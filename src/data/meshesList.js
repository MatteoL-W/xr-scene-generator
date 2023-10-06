import { Box, Sphere } from '@react-three/drei'

const meshesList = [
  {
    name: 'Box',
    component: Box,
    args: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1.5],
      'material-color': '#000000',
    },
  },
  {
    name: 'Sphere',
    component: Sphere,
    args: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      'material-color': '#000000',
    },
  },
]

export default meshesList

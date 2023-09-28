import { Box, Sphere } from '@react-three/drei'

const meshesList = [
  {
    name: 'Box',
    component: Box,
    args: {
      position: [0, 0, 0],
      scaleX: 1,
      scaleY: 1,
      'material-color': 'black',
    },
  },
  {
    name: 'Sphere',
    component: Sphere,
    args: {
      position: [0, 0, 0],
      scale: 1,
      'material-color': '#000000',
    },
  },
]

export default meshesList

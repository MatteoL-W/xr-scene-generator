const lightsList = [
  {
    name: 'Ambient',
    userSetName: 'Ambient',
    component: 'AmbientLight',
    transformations: {
      position: [0, 0, 0],
    },
    args: {
      visible: true,
      castShadow: false,
    },
  },
  {
    name: 'Directional',
    userSetName: 'Directional',
    component: 'DirectionalLight',
    transformations: {
      position: [0, 0, 0],
      direction: [0, 0, 0],
    },
    args: {
      visible: true,
      castShadow: false,
    },
  },
  {
    name: 'Point',
    userSetName: 'Point',
    component: 'PointLight',
    transformations: {
      position: [0, 0, 0],
    },
    args: {
      visible: true,
      castShadow: false,
    },
  },
  {
    name: 'Spot',
    userSetName: 'Spot',
    component: 'SpotLight',
    transformations: {
      position: [0, 0, 0],
      direction: [0, 0, 0],
    },
    args: {
      visible: true,
      castShadow: false,
    },
  },
]

export default lightsList

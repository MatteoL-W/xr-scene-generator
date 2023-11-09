const lightsList = [
  {
    name: 'Ambient',
    userSetName: 'Ambient',
    type: 'light',
    component: 'AmbientLight',
    parameters: {
      color: '#000000',
      intensity: 1,
    },
    args: {
      visible: true,
    },
  },
  {
    name: 'Directional',
    userSetName: 'Directional',
    type: 'light',
    component: 'DirectionalLight',
    transformations: {
      position: [5, 0, 0],
    },
    parameters: {
      direction: [0, 0, 0],
      color: '#000000',
      intensity: 1,
    },
    args: {
      visible: true,
      castShadow: false,
    },
  },
  {
    name: 'Point',
    userSetName: 'Point',
    type: 'light',
    component: 'PointLight',
    transformations: {
      position: [0, 0, 0],
    },
    parameters: {
      color: '#000000',
      intensity: 1,
      distance: 1,
      decay: 2,
    },
    args: {
      visible: true,
      castShadow: false,
    },
  },
  {
    name: 'Spot',
    userSetName: 'Spot',
    type: 'light',
    component: 'SpotLight',
    transformations: {
      position: [0, 0, 5],
    },
    parameters: {
      direction: [0, 0, 0],
      color: '#000000',
      intensity: 1,
      distance: 5,
      decay: 0,
      penumbra: 0,
      angle: 0.3,
    },
    args: {
      visible: true,
      castShadow: false,
    },
  },
]

export default lightsList

const lightsList = [
  {
    name: 'Ambient',
    userSetName: 'Ambient',
    type: 'light',
    component: 'AmbientLight',
    transformations: {
      position: [0, 0, 0],
    },
    material: {
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
      position: [0, 0, 0],
    },
    material: {
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
    material: {
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
      position: [0, 0, 0],
      direction: [0, 0, 0],
    },
    material: {
      color: '#000000',
      intensity: 1,
      distance: 1,
      decay: 2,
      penumbra: 0,
      angle: Math.PI / 3,
    },
    args: {
      visible: true,
      castShadow: false,
    },
  },
]

export default lightsList

export default {
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
}

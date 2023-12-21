export default {
  name: 'Box',
  userSetName: 'Box',
  type: 'mesh',
  component: 'BoxPhong',
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
    receiveShadow: false,
    castShadow: false,
    hasPhysics: false,
    hasInteractivity: false,
    isFloating: false,
  },
}

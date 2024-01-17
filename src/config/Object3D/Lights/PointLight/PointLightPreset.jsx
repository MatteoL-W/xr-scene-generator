export const PointLightPreset = {
  name: 'Point',
  internalName: 'PointLight',
  type: 'light',
  transformations: {
    position: [0, 0, 0],
  },
  parameters: {
    color: '#000000',
    intensity: 1,
    distance: 0,
    decay: 2,
  },
  args: {
    visible: true,
    castShadow: false,
  },
}

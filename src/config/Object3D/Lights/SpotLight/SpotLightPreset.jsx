export const SpotLightPreset = {
  name: 'Spot',
  internalName: 'SpotLight',
  type: 'light',
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
}

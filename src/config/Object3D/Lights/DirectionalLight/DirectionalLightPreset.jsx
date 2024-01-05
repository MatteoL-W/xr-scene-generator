export const DirectionalLightPreset = {
  name: 'Directional',
  internalName: 'DirectionalLight',
  type: 'light',
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
}

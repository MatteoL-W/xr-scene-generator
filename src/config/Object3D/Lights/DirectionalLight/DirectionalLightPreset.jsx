export const DirectionalLightPreset = {
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
}

import { Folders } from '../Folders.js'

export const TraditionalWallPortalPreset = {
  name: 'Traditional Wall Portal',
  internalName: 'TraditionalWallPortal',
  type: 'mesh',
  folder: Folders.CONSTRUCTIONS,
  transformations: {
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
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

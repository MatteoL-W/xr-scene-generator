/**
 * Generates a group 3D object for the imported mesh
 * @param gltfSceneUUID
 * @returns {object}
 */
export function generateGroupFromGLTF(gltfSceneUUID) {
  return {
    isImported: true,
    uuid: gltfSceneUUID,

    name: 'Imported',
    internalName: 'Imported',
    type: 'mesh',
    component: 'Custom',
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
}

export function generateGroupFromGLTF(gltfSceneUUID) {
  return {
    isImported: true,
    uuid: gltfSceneUUID,

    name: 'Imported',
    userSetName: 'Imported',
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

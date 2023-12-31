import { lightsComponentList } from '@/config/Object3D/Lights/LightsComponentList.js'
import { meshesComponentList } from '@/config/Object3D/Meshes/MeshesComponentList.js'
import { Custom } from '@/config/Object3D/Meshes/CustomGLTF.jsx'

const componentMap = {
  ...lightsComponentList,
  ...meshesComponentList,
  Custom,
}

/**
 * Get 3D Object component (Light / Mesh) by name
 * @param name
 * @returns {*}
 */
export default function getObjectComponent(name) {
  return componentMap[name]
}

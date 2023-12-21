import { lightComponentsLists } from '@/config/presets/components/lights.jsx'
import { meshesComponentsLists } from '@/config/presets/components/meshes.jsx'
import { Custom } from '@/config/presets/components/CustomGLTF.jsx'
import { Sphere } from '@react-three/drei'

const componentMap = {
  ...lightComponentsLists,
  ...meshesComponentsLists,

  Sphere,
  Custom,
}

export default function getObjectComponent(name) {
  return componentMap[name]
}

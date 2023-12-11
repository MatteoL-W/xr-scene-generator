import {
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight,
} from './components/lights.jsx'

import { BoxPhong } from './components/meshes.jsx'
import { Sphere } from '@react-three/drei'

import { Custom } from './components/importedGLTF.jsx'

const componentMap = {
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight,

  BoxPhong,
  Sphere,

  Custom,
}

export default function getObjectComponent(name) {
  return componentMap[name]
}

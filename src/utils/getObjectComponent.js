import { Box, Sphere } from '@react-three/drei'
import { BoxPhong } from '@/config/presets/components/meshes.jsx'
import {
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight,
} from '@/config/presets/components/lights.jsx'
import { Custom } from '@/config/presets/components/importedGLTF.jsx'

// ToDo: Move to presets ?

export function getObjectComponent(name) {
  switch (name) {
    // Lights
    case 'AmbientLight':
      return AmbientLight
    case 'DirectionalLight':
      return DirectionalLight
    case 'PointLight':
      return PointLight
    case 'SpotLight':
      return SpotLight

    // Meshes
    case 'BoxPhong':
      return BoxPhong
    case 'Sphere':
      return Sphere

    // Imported
    case 'Custom':
      return Custom

    default:
      return Box
  }
}

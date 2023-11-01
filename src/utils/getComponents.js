import { Box, Sphere } from '@react-three/drei'
import { BoxPhong } from '@/data/components.jsx'
import {
  AmbientLight,
  DirectionalLight,
  PointLight,
  SpotLight,
} from '@/data/lightsComponent.jsx'

export function getLightComponent(name) {
  switch (name) {
    case 'AmbientLight':
      return AmbientLight
    case 'DirectionalLight':
      return DirectionalLight
    case 'PointLight':
      return PointLight
    case 'SpotLight':
      return SpotLight
    default:
      return Box
  }
}

export function getMeshComponent(name) {
  switch (name) {
    case 'BoxPhong':
      return BoxPhong
    case 'Sphere':
      return Sphere
    default:
      return Box
  }
}

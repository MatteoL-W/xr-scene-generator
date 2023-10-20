import { Box, Sphere } from '@react-three/drei'
import { BoxPhong } from '@/data/components.jsx'

export default function getMeshComponent(name) {
  switch (name) {
    case 'BoxPhong':
      return BoxPhong
    case 'Sphere':
      return Sphere
    default:
      return Box
  }
}

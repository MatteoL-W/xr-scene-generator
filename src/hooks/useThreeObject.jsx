import { useThree } from '@react-three/fiber'

export default function useThreeObject(meshUUID) {
  const { scene } = useThree()
  return scene.getObjectByProperty('uuid', meshUUID)
}

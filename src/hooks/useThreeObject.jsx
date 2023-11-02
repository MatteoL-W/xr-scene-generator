import { useThree } from '@react-three/fiber'

export default function useThreeObject(objectUUID) {
  const { scene } = useThree()
  return scene.getObjectByProperty('uuid', objectUUID)
}

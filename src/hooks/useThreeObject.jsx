import { useThree } from '@react-three/fiber'

/**
 * This hook is used to get a three.js object by its uuid
 * @param objectUUID
 * @returns {THREE.Object3D | undefined}
 */
export default function useThreeObject(objectUUID) {
  const { scene } = useThree()
  return scene.getObjectByProperty('uuid', objectUUID)
}

import { useEffect } from 'react'

/**
 * This hook is used to sync the light direction with the light target position
 * @param light
 * @param lightRef
 */
export default function useSyncLightDirection(light, lightRef) {
  useEffect(() => {
    const direction = light.parameters.direction
    const targetPosition = lightRef.current?.target?.position

    if (direction && targetPosition)
      lightRef.current.target.position.set(...light.parameters.direction)
  }, [light.parameters.direction])
}

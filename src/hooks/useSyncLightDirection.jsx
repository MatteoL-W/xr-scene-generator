import { useEffect } from 'react'

export default function useSyncLightDirection(light, lightRef) {
  useEffect(() => {
    const direction = light.parameters.direction
    const targetPosition = lightRef.current?.target?.position

    if (direction && targetPosition)
      lightRef.current.target.position.set(...light.parameters.direction)
  }, [light.parameters.direction])
}

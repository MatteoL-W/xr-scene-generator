import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'

export default function Camera() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(2.5, 2.5, 2.5)
  }, [])

  return <></>
}

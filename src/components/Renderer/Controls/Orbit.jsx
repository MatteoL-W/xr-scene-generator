import ListenForCameraInstruction from './ListenForCameraInstruction.jsx'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { useThree } from '@react-three/fiber'

export default function Orbit() {
  const orbitControlsRef = useRef()
  const { camera } = useThree()

  const control = orbitControlsRef.current
  const cameraMatrix = camera.matrix.elements

  useEffect(() => {
    function handleCameraChange() {
      const cameraNeedsToBeReset = cameraMatrix.includes(NaN)
      if (cameraNeedsToBeReset) {
        control?.reset()
        camera.position.set(2.5, 2.5, 2.5)
      }
    }

    control?.addEventListener('change', handleCameraChange)
    return () => {
      control?.removeEventListener('change', handleCameraChange)
    }
  }, [camera.matrix.elements, control])

  return (
    <ListenForCameraInstruction orbitControlsRef={orbitControlsRef}>
      <OrbitControls
        makeDefault
        enableDamping={false}
        ref={orbitControlsRef}
        maxDistance={50}
        minDistance={0.5}
      />
    </ListenForCameraInstruction>
  )
}

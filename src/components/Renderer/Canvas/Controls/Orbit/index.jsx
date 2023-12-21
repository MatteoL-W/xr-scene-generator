import ListenForCameraInstruction from './ListenForCameraInstruction.jsx'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

export default function Orbit() {
  const orbitControlsRef = useRef()

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

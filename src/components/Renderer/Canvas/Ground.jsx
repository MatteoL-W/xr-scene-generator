import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Ground() {
  return (
    <RigidBody type='fixed'>
      <Plane castShadow rotation-x={-Math.PI / 2} args={[40, 40]}>
        <shadowMaterial />
      </Plane>
    </RigidBody>
  )
}

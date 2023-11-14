import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Ground() {
  return (
    <RigidBody type='fixed'>
      <Plane receiveShadow castShadow rotation-x={-Math.PI / 2} args={[5, 5]}>
        <shadowMaterial />
      </Plane>
    </RigidBody>
  )
}

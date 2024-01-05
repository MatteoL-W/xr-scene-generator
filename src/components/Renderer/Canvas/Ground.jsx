import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Ground() {
  return (
    <RigidBody type='fixed'>
      <Plane receiveShadow rotation-x={-Math.PI / 2} args={[100, 100]}>
        <shadowMaterial />
      </Plane>
    </RigidBody>
  )
}

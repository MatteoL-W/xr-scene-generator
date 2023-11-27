import PropTypes from 'prop-types'
import { RigidBody } from '@react-three/rapier'

PhysicsMeshWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  objectRef: PropTypes.object.isRequired,
}

export default function PhysicsMeshWrapper({ children, objectRef }) {
  const position = objectRef?.current?.position
  const rotation = objectRef?.current?.rotation

  return (
    <RigidBody
      colliders='hull'
      name='MeshPhysicsComponent'
      position={position}
      quaternion={rotation}
    >
      {children}
    </RigidBody>
  )
}

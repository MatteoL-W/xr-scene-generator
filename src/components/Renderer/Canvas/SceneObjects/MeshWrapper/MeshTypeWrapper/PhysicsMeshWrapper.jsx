import PropTypes from 'prop-types'
import { RigidBody } from '@react-three/rapier'

PhysicsMeshWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  objectRef: PropTypes.object.isRequired,
}

export default function PhysicsMeshWrapper({ children, objectRef }) {
  return (
    <RigidBody colliders='hull' name='MeshPhysicsComponent'>
      {children}
    </RigidBody>
  )
}

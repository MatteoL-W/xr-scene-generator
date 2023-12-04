import PropTypes from 'prop-types'
import { RigidBody } from '@react-three/rapier'

PhysicsMeshWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  objectRef: PropTypes.object.isRequired,
}

// eslint-disable-next-line no-unused-vars
export default function PhysicsMeshWrapper({ children, objectRef }) {
  return (
    <RigidBody colliders='hull' name='MeshPhysicsComponent'>
      {children}
    </RigidBody>
  )
}
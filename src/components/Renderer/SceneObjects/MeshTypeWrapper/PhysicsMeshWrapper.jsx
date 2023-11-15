import PropTypes from 'prop-types'
import { RigidBody } from '@react-three/rapier'

PhysicsMeshWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function PhysicsMeshWrapper({ children }) {
  return <RigidBody colliders='hull'>{children}</RigidBody>
}

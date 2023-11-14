import PropTypes from 'prop-types'
import { useXR } from '@react-three/xr'
import { RigidBody } from '@react-three/rapier'

MeshWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

// eslint-disable-next-line no-unused-vars
export default function MeshWrapper({ object, objectRef, children }) {
  const { isPresenting } = useXR()

  if (isPresenting && object.args?.hasPhysics)
    return <RigidBody colliders='hull'>{children}</RigidBody>
  else return <>{children}</>
}

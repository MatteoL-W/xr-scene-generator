import PropTypes from 'prop-types'
import { useXR } from '@react-three/xr'
import InteractiveMeshWrapper from './MeshTypeWrapper/InteractiveMeshWrapper.jsx'
import PhysicsMeshWrapper from './MeshTypeWrapper/PhysicsMeshWrapper.jsx'

MeshWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

// eslint-disable-next-line no-unused-vars
export default function MeshWrapper({ object, objectRef, children }) {
  const { isPresenting } = useXR()
  const { hasPhysics, hasInteractivity } = object.args || {}

  if (!isPresenting) return <>{children}</>

  let wrappedMesh = children

  if (hasInteractivity)
    wrappedMesh = <InteractiveMeshWrapper>{wrappedMesh}</InteractiveMeshWrapper>

  if (hasPhysics)
    wrappedMesh = <PhysicsMeshWrapper>{wrappedMesh}</PhysicsMeshWrapper>

  return <>{wrappedMesh}</>
}

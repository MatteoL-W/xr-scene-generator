import PropTypes from 'prop-types'
import { useXR } from '@react-three/xr'
import InteractiveMeshWrapper from '@/components/Renderer/SceneObjects/MeshTypeWrapper/InteractiveMeshWrapper.jsx'
import PhysicsMeshWrapper from '@/components/Renderer/SceneObjects/MeshTypeWrapper/PhysicsMeshWrapper.jsx'

MeshWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

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

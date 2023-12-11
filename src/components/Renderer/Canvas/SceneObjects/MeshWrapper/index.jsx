import PropTypes from 'prop-types'
import InteractiveMeshWrapper from './MeshTypeWrapper/InteractiveMeshWrapper.jsx'
import PhysicsMeshWrapper from './MeshTypeWrapper/PhysicsMeshWrapper.jsx'
import FloatingMeshWrapper from './MeshTypeWrapper/FloatingMeshWrapper.jsx'
import FallbackWrapper from '@/utils/FallbackWrapper.jsx'
import { useXR } from '@react-three/xr'

MeshWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

const activePropertyWrapper = {
  hasPhysics: PhysicsMeshWrapper,
  hasInteractivity: InteractiveMeshWrapper,
  isFloating: FloatingMeshWrapper,
}

export default function MeshWrapper({ object, objectRef, children }) {
  const { isPresenting } = useXR()
  if (!isPresenting) return children

  const property = Object.keys(activePropertyWrapper).find(
    (property) => object.args[property],
  )
  const Wrapper = activePropertyWrapper[property] || FallbackWrapper

  return <Wrapper objectRef={objectRef}>{children}</Wrapper>
}

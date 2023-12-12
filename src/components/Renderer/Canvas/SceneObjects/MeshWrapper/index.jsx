import PropTypes from 'prop-types'
import InteractiveMeshWrapper from './MeshTypeWrapper/InteractiveMeshWrapper.jsx'
import PhysicsMeshWrapper from './MeshTypeWrapper/PhysicsMeshWrapper.jsx'
import FloatingMeshWrapper from './MeshTypeWrapper/FloatingMeshWrapper.jsx'
import FallbackWrapper from '@/utils/FallbackWrapper.jsx'
import { withXRImmersion } from '@/hoc/withXRImmersion.jsx'

const activeMeshPropertyWrapper = {
  hasPhysics: PhysicsMeshWrapper,
  hasInteractivity: InteractiveMeshWrapper,
  isFloating: FloatingMeshWrapper,
}

const MeshWrapperComponent = ({ object, objectRef, children }) => {
  const property = Object.keys(activeMeshPropertyWrapper).find(
    (property) => object.args[property],
  )
  const Wrapper = activeMeshPropertyWrapper[property] || FallbackWrapper

  return <Wrapper objectRef={objectRef}>{children}</Wrapper>
}

MeshWrapperComponent.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

const MeshWrapper = withXRImmersion({
  Component: MeshWrapperComponent,
  insideXR: true,
  returnChildrenElse: true,
})
export default MeshWrapper

import PropTypes from 'prop-types'
import { getSpecificMeshWrapper } from './getSpecificMeshWrapper.js'
import { withXRImmersion } from '@/hoc/withXRImmersion.jsx'
import FallbackWrapper from '@/utils/FallbackWrapper.jsx'

function MeshWrapperComponent({ object, objectRef, children }) {
  const PropertyWrapper = getSpecificMeshWrapper(object) || FallbackWrapper
  return <PropertyWrapper objectRef={objectRef}>{children}</PropertyWrapper>
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

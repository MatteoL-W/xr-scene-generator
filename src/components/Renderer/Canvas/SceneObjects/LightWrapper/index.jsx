import PropTypes from 'prop-types'
import DirectionalLightWrapper from './LightTypeWrapper/DirectionalLightWrapper.jsx'
import SpotLightWrapper from './LightTypeWrapper/SpotLightWrapper.jsx'
import PointLightWrapper from './LightTypeWrapper/PointLightWrapper.jsx'
import FallbackWrapper from '@/utils/FallbackWrapper.jsx'
import { withXRImmersion } from '@/hoc/withXRImmersion.jsx'

function LightWrapperComponent({ object, objectRef, children }) {
  if (!object.args.visible) return children

  const TypeWrapper =
    {
      DirectionalLight: DirectionalLightWrapper,
      SpotLight: SpotLightWrapper,
      PointLight: PointLightWrapper,
    }[object.component] || FallbackWrapper

  return (
    <TypeWrapper lightRef={objectRef} object={object}>
      {children}
    </TypeWrapper>
  )
}

LightWrapperComponent.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

const LightWrapper = withXRImmersion({
  Component: LightWrapperComponent,
  insideXR: false,
  returnChildrenElse: true,
})
export default LightWrapper

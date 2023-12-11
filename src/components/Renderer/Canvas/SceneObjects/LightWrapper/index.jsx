import { useXR } from '@react-three/xr'
import PropTypes from 'prop-types'
import DirectionalLightWrapper from './LightTypeWrapper/DirectionalLightWrapper.jsx'
import SpotLightWrapper from './LightTypeWrapper/SpotLightWrapper.jsx'
import PointLightWrapper from './LightTypeWrapper/PointLightWrapper.jsx'
import FallbackWrapper from '@/utils/FallbackWrapper.jsx'

LightWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default function LightWrapper({ object, objectRef, children }) {
  const { isPresenting } = useXR()
  if (isPresenting || !object.args.visible) return children

  const Wrapper =
    {
      DirectionalLight: DirectionalLightWrapper,
      SpotLight: SpotLightWrapper,
      PointLight: PointLightWrapper,
    }[object.component] || FallbackWrapper

  return (
    <Wrapper lightRef={objectRef} object={object}>
      {children}
    </Wrapper>
  )
}

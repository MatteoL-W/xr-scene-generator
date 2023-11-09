import { Fragment } from 'react'
import PropTypes from 'prop-types'
import DirectionalLightWrapper from './TypeLightsWrapper/DirectionalLightWrapper.jsx'
import SpotLightWrapper from './TypeLightsWrapper/SpotLightWrapper.jsx'
import PointLightWrapper from './TypeLightsWrapper/PointLightWrapper.jsx'
import AmbientLightWrapper from './TypeLightsWrapper/AmbientLightWrapper.jsx'
import { useXR } from '@react-three/xr'

LightWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default function LightWrapper({ object, objectRef, children }) {
  const { isPresenting } = useXR()
  const TypeLightWrapper =
    {
      DirectionalLight: DirectionalLightWrapper,
      SpotLight: SpotLightWrapper,
      PointLight: PointLightWrapper,
      AmbientLight: AmbientLightWrapper,
    }[object.component] || Fragment

  if (object.parameters.direction)
    objectRef?.current?.target?.position?.set(...object.parameters.direction)

  if (isPresenting) return <>{children}</>
  else
    return <TypeLightWrapper lightRef={objectRef}>{children}</TypeLightWrapper>
}

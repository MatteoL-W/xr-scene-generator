import { Fragment } from 'react'
import PropTypes from 'prop-types'
import DirectionalLightWrapper from './TypeLightsWrapper/DirectionalLightWrapper.jsx'
import SpotLightWrapper from './TypeLightsWrapper/SpotLightWrapper.jsx'
import PointLightWrapper from './TypeLightsWrapper/PointLightWrapper.jsx'

LightWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default function LightWrapper({ object, objectRef, children }) {
  const TypeLightWrapper =
    {
      DirectionalLight: DirectionalLightWrapper,
      SpotLight: SpotLightWrapper,
      PointLight: PointLightWrapper,
    }[object.component] || Fragment

  return <TypeLightWrapper lightRef={objectRef}>{children}</TypeLightWrapper>
}

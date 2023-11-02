import { Fragment } from 'react'
import PropTypes from 'prop-types'
import DirectionalLightWrapper from './TypeLightsWrapper/DirectionalLightWrapper.jsx'
import SpotLightWrapper from './TypeLightsWrapper/SpotLightWrapper.jsx'
import PointLightWrapper from './TypeLightsWrapper/PointLightWrapper.jsx'
import AmbientLightWrapper from '@/components/Renderer/SceneObjects/TypeLightsWrapper/AmbientLightWrapper.jsx'

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
      AmbientLight: AmbientLightWrapper,
    }[object.component] || Fragment

  return <TypeLightWrapper lightRef={objectRef}>{children}</TypeLightWrapper>
}

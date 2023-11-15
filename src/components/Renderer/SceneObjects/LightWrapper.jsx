import { Fragment } from 'react'
import PropTypes from 'prop-types'
import DirectionalLightWrapper from './LightTypeWrapper/DirectionalLightWrapper.jsx'
import SpotLightWrapper from './LightTypeWrapper/SpotLightWrapper.jsx'
import PointLightWrapper from './LightTypeWrapper/PointLightWrapper.jsx'
import AmbientLightWrapper from './LightTypeWrapper/AmbientLightWrapper.jsx'
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

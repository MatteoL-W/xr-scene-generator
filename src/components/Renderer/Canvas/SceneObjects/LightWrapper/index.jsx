import { useEffect } from 'react'
import { useXR } from '@react-three/xr'
import PropTypes from 'prop-types'
import DirectionalLightWrapper from './DirectionalLightWrapper.jsx'
import SpotLightWrapper from './SpotLightWrapper.jsx'
import PointLightWrapper from './PointLightWrapper.jsx'
import FallbackWrapper from '@/utils/FallbackWrapper.jsx'

LightWrapper.propTypes = {
  object: PropTypes.object.isRequired,
  objectRef: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

const TypeLightWrapper = {
  DirectionalLight: DirectionalLightWrapper,
  SpotLight: SpotLightWrapper,
  PointLight: PointLightWrapper,
}

export default function LightWrapper({ object, objectRef, children }) {
  useEffect(() => {
    const direction = object.parameters.direction
    const targetPosition = objectRef.current?.target?.position

    if (direction && targetPosition)
      objectRef.current.target.position.set(...object.parameters.direction)
  }, [object.parameters.direction])

  const { isPresenting } = useXR()
  if (isPresenting || !object.args.visible) return children

  const Wrapper = TypeLightWrapper[object.component] || FallbackWrapper
  return <Wrapper lightRef={objectRef}>{children}</Wrapper>
}

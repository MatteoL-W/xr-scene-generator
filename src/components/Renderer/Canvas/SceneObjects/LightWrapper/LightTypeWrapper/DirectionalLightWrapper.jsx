import useSyncLightDirection from '@/hooks/useSyncLightDirection.jsx'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import PropTypes from 'prop-types'

DirectionalLightWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  object: PropTypes.object.isRequired,
  lightRef: PropTypes.object.isRequired,
}

export default function DirectionalLightWrapper({
  children,
  object,
  lightRef,
}) {
  useSyncLightDirection(object, lightRef)
  useHelper(lightRef, DirectionalLightHelper, 1, lightRef.current?.color)
  return children
}

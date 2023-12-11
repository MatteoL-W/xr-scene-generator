import useSyncLightDirection from '@/hooks/useSyncLightDirection.jsx'
import { useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three'
import PropTypes from 'prop-types'

SpotLightWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  object: PropTypes.object.isRequired,
  lightRef: PropTypes.object.isRequired,
}

export default function SpotLightWrapper({ children, object, lightRef }) {
  useSyncLightDirection(object, lightRef)
  useHelper(lightRef, SpotLightHelper, lightRef.current?.color)
  return children
}

import { useHelper } from '@react-three/drei'
import { SpotLightHelper } from 'three'
import PropTypes from 'prop-types'

SpotLightWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  lightRef: PropTypes.object.isRequired,
}

export default function SpotLightWrapper({ children, lightRef }) {
  useHelper(lightRef, SpotLightHelper, 'red')
  return children
}

import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper } from 'three'
import PropTypes from 'prop-types'

DirectionalLightWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  lightRef: PropTypes.object.isRequired,
}

export default function DirectionalLightWrapper({ children, lightRef }) {
  useHelper(lightRef, DirectionalLightHelper, 1, 'red')
  return <>{children}</>
}

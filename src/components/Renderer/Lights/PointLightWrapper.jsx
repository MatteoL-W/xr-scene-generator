import { useHelper } from '@react-three/drei'
import { PointLightHelper } from 'three'
import PropTypes from 'prop-types'

PointLightWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  lightRef: PropTypes.object.isRequired,
}

export default function PointLightWrapper({ children, lightRef }) {
  useHelper(lightRef, PointLightHelper, 1, 'red')
  return <>{children}</>
}

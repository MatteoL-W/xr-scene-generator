import PropTypes from 'prop-types'
import { Float } from '@react-three/drei'

FloatingMeshWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  objectRef: PropTypes.object.isRequired,
}

// eslint-disable-next-line no-unused-vars
export default function FloatingMeshWrapper({ children, objectRef }) {
  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={2}>
      {children}
    </Float>
  )
}

import PropTypes from 'prop-types'
import { Float } from '@react-three/drei'

FloatingMeshWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function FloatingMeshWrapper({ children }) {
  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={2}>
      {children}
    </Float>
  )
}

import { forwardRef } from 'react'
import { Torus } from '@react-three/drei'
import PropTypes from 'prop-types'

export const TorusPhong = forwardRef((props, ref) => {
  const componentProps = { ...props }
  const materialColor = props['material-color']
  delete componentProps['material-color']

  return (
    <Torus ref={ref} {...componentProps}>
      <meshStandardMaterial color={materialColor} />
    </Torus>
  )
})

TorusPhong.displayName = 'SpherePhong'
TorusPhong.propTypes = {
  'material-color': PropTypes.string.isRequired,
}

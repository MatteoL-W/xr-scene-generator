import { forwardRef } from 'react'
import { Sphere } from '@react-three/drei'
import PropTypes from 'prop-types'

export const SpherePhong = forwardRef((props, ref) => {
  const componentProps = { ...props }
  const materialColor = props['material-color']
  delete componentProps['material-color']

  return (
    <Sphere ref={ref} {...componentProps}>
      <meshStandardMaterial color={materialColor} />
    </Sphere>
  )
})

SpherePhong.displayName = 'SpherePhong'
SpherePhong.propTypes = {
  'material-color': PropTypes.string.isRequired,
}

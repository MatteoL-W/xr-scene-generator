import { forwardRef } from 'react'
import { Cylinder } from '@react-three/drei'
import PropTypes from 'prop-types'

export const CylinderPhong = forwardRef((props, ref) => {
  const componentProps = { ...props }
  const materialColor = props['material-color']
  delete componentProps['material-color']

  return (
    <Cylinder ref={ref} {...componentProps}>
      <meshStandardMaterial color={materialColor} />
    </Cylinder>
  )
})

CylinderPhong.displayName = 'CylinderPhong'
CylinderPhong.propTypes = {
  'material-color': PropTypes.string.isRequired,
}

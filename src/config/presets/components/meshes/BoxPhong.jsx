import { forwardRef } from 'react'
import { Box } from '@react-three/drei'
import PropTypes from 'prop-types'

export const BoxPhong = forwardRef((props, ref) => {
  const componentProps = { ...props }
  const materialColor = props['material-color']
  delete componentProps['material-color']

  return (
    <Box ref={ref} {...componentProps}>
      <meshStandardMaterial color={materialColor} />
    </Box>
  )
})

BoxPhong.displayName = 'BoxPhong'
BoxPhong.propTypes = {
  'material-color': PropTypes.string.isRequired,
}
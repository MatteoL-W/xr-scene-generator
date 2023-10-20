import { Box } from '@react-three/drei'
import { forwardRef } from 'react'
import PropTypes from 'prop-types'

export const BoxPhong = forwardRef((props, ref) => {
  return (
    <Box ref={ref} {...props}>
      <meshStandardMaterial color={props['material-color']} />
    </Box>
  )
})

BoxPhong.propTypes = {
  'material-color': PropTypes.string.isRequired,
}

BoxPhong.displayName = 'BoxPhong'

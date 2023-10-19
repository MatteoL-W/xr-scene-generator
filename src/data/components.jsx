import { Box } from '@react-three/drei'
import { forwardRef } from 'react'

export const BoxPhong = forwardRef((props, ref) => {
  return (
    <Box ref={ref} {...props}>
      <meshStandardMaterial color='#000000' />
    </Box>
  )
})

BoxPhong.displayName = 'BoxPhong'

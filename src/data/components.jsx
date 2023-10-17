import { Box } from '@react-three/drei'
import { forwardRef } from 'react'

export const BoxPhong = forwardRef((props, ref) => {
  return (
    <Box ref={ref} {...props}>
      <meshStandardMaterial color='hotpink' />
    </Box>
  )
})

BoxPhong.displayName = 'BoxPhong'

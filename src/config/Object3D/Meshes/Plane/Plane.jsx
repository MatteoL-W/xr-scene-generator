import { forwardRef } from 'react'
import { Plane as PlaneR3F } from '@react-three/drei'

export const Plane = forwardRef((props, ref) => {
  return <PlaneR3F ref={ref} {...props} />
})
Plane.displayName = 'Plane'

import { forwardRef } from 'react'

export const Custom = forwardRef((props, ref) => {
  return <group ref={ref} {...props} />
})
Custom.displayName = 'Custom'

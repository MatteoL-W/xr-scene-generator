import { forwardRef } from 'react'

export const AmbientLight = forwardRef((props, ref) => {
  return <ambientLight ref={ref} {...props} />
})
AmbientLight.displayName = 'AmbientLight'
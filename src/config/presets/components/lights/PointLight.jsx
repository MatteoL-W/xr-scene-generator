import { forwardRef } from 'react'

export const PointLight = forwardRef((props, ref) => {
  return <pointLight ref={ref} {...props} />
})
PointLight.displayName = 'PointLight'
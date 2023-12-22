import { forwardRef } from 'react'

export const SpotLight = forwardRef((props, ref) => {
  return <spotLight ref={ref} {...props} />
})
SpotLight.displayName = 'SpotLight'

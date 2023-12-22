import { forwardRef } from 'react'

export const DirectionalLight = forwardRef((props, ref) => {
  return <directionalLight ref={ref} {...props} />
})
DirectionalLight.displayName = 'DirectionalLight'

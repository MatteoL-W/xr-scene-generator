import { forwardRef } from 'react'

export const AmbientLight = forwardRef((props, ref) => {
  return <ambientLight ref={ref} {...props} />
})
AmbientLight.displayName = 'AmbientLight'

export const DirectionalLight = forwardRef((props, ref) => {
  return <directionalLight ref={ref} {...props} />
})
DirectionalLight.displayName = 'DirectionalLight'

export const PointLight = forwardRef((props, ref) => {
  return <pointLight ref={ref} {...props} />
})
PointLight.displayName = 'PointLight'

export const SpotLight = forwardRef((props, ref) => {
  return <spotLight ref={ref} {...props} />
})
SpotLight.displayName = 'SpotLight'

import { forwardRef } from 'react'

const forwardedProps = ['receiveShadow', 'castShadow', 'onClick']

export const Custom = forwardRef((props, ref) => {
  const group = ref.current

  group?.traverse((node) => {
    forwardedProps.map((prop) => {
      if (props?.[prop] !== null) node[prop] = props[prop]
    })
  })

  return <group ref={ref} {...props} />
})
Custom.displayName = 'Custom'

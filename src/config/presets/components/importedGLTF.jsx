import { forwardRef } from 'react'
import PropTypes from 'prop-types'

const forwardedProps = ['receiveShadow', 'castShadow', 'onClick']

export const Custom = forwardRef((props, ref) => {
  const group = ref.current

  group?.traverse((node) => {
    forwardedProps.map((prop) => {
      if (props?.[prop] !== null) node[prop] = props[prop]
    })
  })

  return <group ref={ref} onClick={props?.onClick} />
})
Custom.displayName = 'Custom'
Custom.propTypes = {
  onClick: PropTypes.func,
}

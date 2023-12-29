import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { forwardPropsToGLTFChildren } from '@/utils/forwardPropsToGLTFChildren.js'

export const Custom = forwardRef((props, ref) => {
  forwardPropsToGLTFChildren(ref, props)

  return <group ref={ref} onClick={props?.onClick} />
})

Custom.displayName = 'Custom'
Custom.propTypes = {
  onClick: PropTypes.func,
}
